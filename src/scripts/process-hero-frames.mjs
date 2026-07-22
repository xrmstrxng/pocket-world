import { mkdir, readFile, readdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const sourceDirectory = path.resolve("public/images/hero-frames");
const outputDirectory = path.resolve("public/images/hero-frames-transparent");
const animationOutputPath = path.resolve("public/images/hero-globe-animation.webp");
const animationOrder = JSON.parse(await readFile(path.resolve("src/widgets/hero/hero-animation-order.json"), "utf8"));

function isBackgroundColor(red, green, blue) {
  const isMagentaChroma = red >= 120
    && blue >= 100
    && red - green >= 50
    && blue - green >= 50;
  const isTealBackdrop = red >= 50 && red <= 180
    && green >= 120 && green <= 215
    && blue >= 125 && blue <= 220
    && green - red >= 18
    && blue - red >= 18
    && Math.abs(blue - green) <= 34;
  return isMagentaChroma || isTealBackdrop;
}

function removeConnectedBackground(data, width, height) {
  const pixelCount = width * height;
  const background = new Uint8Array(pixelCount);
  const queue = new Int32Array(pixelCount);
  let head = 0;
  let tail = 0;

  function enqueue(index) {
    if (background[index]) return;
    const offset = index * 4;
    if (!isBackgroundColor(data[offset], data[offset + 1], data[offset + 2])) return;
    background[index] = 1;
    queue[tail++] = index;
  }

  for (let x = 0; x < width; x++) {
    enqueue(x);
    enqueue((height - 1) * width + x);
  }
  for (let y = 0; y < height; y++) {
    enqueue(y * width);
    enqueue(y * width + width - 1);
  }

  while (head < tail) {
    const index = queue[head++];
    const x = index % width;
    const y = Math.floor(index / width);
    if (x > 0) enqueue(index - 1);
    if (x + 1 < width) enqueue(index + 1);
    if (y > 0) enqueue(index - width);
    if (y + 1 < height) enqueue(index + width);
  }

  const foreground = new Uint8Array(pixelCount);
  for (let index = 0; index < pixelCount; index++) {
    const alphaOffset = index * 4 + 3;
    if (background[index]) data[alphaOffset] = 0;
    else {
      data[alphaOffset] = 255;
      foreground[index] = 1;
    }
  }
  return foreground;
}

function labelComponents(foreground, width, height) {
  const labels = new Int16Array(width * height);
  labels.fill(-1);
  const queue = new Int32Array(width * height);
  const components = [];

  for (let start = 0; start < foreground.length; start++) {
    if (!foreground[start] || labels[start] !== -1) continue;
    const label = components.length;
    let head = 0;
    let tail = 0;
    let area = 0;
    let minX = width;
    let minY = height;
    let maxX = 0;
    let maxY = 0;
    labels[start] = label;
    queue[tail++] = start;

    while (head < tail) {
      const index = queue[head++];
      const x = index % width;
      const y = Math.floor(index / width);
      area++;
      minX = Math.min(minX, x);
      minY = Math.min(minY, y);
      maxX = Math.max(maxX, x);
      maxY = Math.max(maxY, y);
      const neighbors = [index - 1, index + 1, index - width, index + width];
      for (const neighbor of neighbors) {
        if (neighbor < 0 || neighbor >= foreground.length) continue;
        const neighborX = neighbor % width;
        if (Math.abs(neighborX - x) > 1) continue;
        if (!foreground[neighbor] || labels[neighbor] !== -1) continue;
        labels[neighbor] = label;
        queue[tail++] = neighbor;
      }
    }

    components.push({ label, area, minX, minY, maxX, maxY, centerX: (minX + maxX) / 2, centerY: (minY + maxY) / 2 });
  }
  return { labels, components };
}

function median(values) {
  const sorted = [...values].sort((a, b) => a - b);
  return sorted[Math.floor(sorted.length / 2)];
}

function measureRegion(foreground, width, height, predicate) {
  let area = 0;
  let minX = width;
  let minY = height;
  let maxX = 0;
  let maxY = 0;
  for (let index = 0; index < foreground.length; index++) {
    if (!foreground[index]) continue;
    const x = index % width;
    const y = Math.floor(index / width);
    if (!predicate(x, y)) continue;
    area++;
    minX = Math.min(minX, x);
    minY = Math.min(minY, y);
    maxX = Math.max(maxX, x);
    maxY = Math.max(maxY, y);
  }
  if (!area) return null;
  return { label: -1, area, minX, minY, maxX, maxY, centerX: (minX + maxX) / 2, centerY: (minY + maxY) / 2 };
}

function unionBounds(components) {
  return {
    minX: Math.min(...components.map((component) => component.minX)),
    minY: Math.min(...components.map((component) => component.minY)),
    maxX: Math.max(...components.map((component) => component.maxX)),
    maxY: Math.max(...components.map((component) => component.maxY)),
  };
}

async function placeScaledGroup(output, frame, labels, bounds, scale, sourceAnchor, targetAnchor) {
  const sourceWidth = bounds.maxX - bounds.minX + 1;
  const sourceHeight = bounds.maxY - bounds.minY + 1;
  const layer = Buffer.alloc(sourceWidth * sourceHeight * 4);

  for (let index = 0; index < frame.foreground.length; index++) {
    if (!frame.foreground[index] || !labels.has(frame.labels[index])) continue;
    const x = index % frame.info.width;
    const y = Math.floor(index / frame.info.width);
    const sourceOffset = index * 4;
    const layerOffset = ((y - bounds.minY) * sourceWidth + x - bounds.minX) * 4;
    frame.data.copy(layer, layerOffset, sourceOffset, sourceOffset + 4);
  }

  const resizedWidth = Math.max(1, Math.round(sourceWidth * scale));
  const resizedHeight = Math.max(1, Math.round(sourceHeight * scale));
  const resized = await sharp(layer, { raw: { width: sourceWidth, height: sourceHeight, channels: 4 } })
    .resize(resizedWidth, resizedHeight, { fit: "fill", kernel: sharp.kernel.nearest })
    .raw()
    .toBuffer();
  const destinationLeft = Math.round(targetAnchor.x - (sourceAnchor.x - bounds.minX) * scale);
  const destinationTop = Math.round(targetAnchor.y - (sourceAnchor.y - bounds.minY) * scale);

  for (let y = 0; y < resizedHeight; y++) {
    for (let x = 0; x < resizedWidth; x++) {
      const sourceOffset = (y * resizedWidth + x) * 4;
      if (!resized[sourceOffset + 3]) continue;
      const destinationX = destinationLeft + x;
      const destinationY = destinationTop + y;
      if (destinationX < 0 || destinationX >= frame.info.width || destinationY < 0 || destinationY >= frame.info.height) continue;
      resized.copy(output, (destinationY * frame.info.width + destinationX) * 4, sourceOffset, sourceOffset + 4);
    }
  }
}

const fileNames = (await readdir(sourceDirectory))
  .filter((name) => /^frame-\d{2}\.png$/.test(name))
  .sort();

if (fileNames.length !== 24) throw new Error(`Expected 24 frames, found ${fileNames.length}`);

const frames = [];
for (const fileName of fileNames) {
  const { data, info } = await sharp(path.join(sourceDirectory, fileName))
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const foreground = removeConnectedBackground(data, info.width, info.height);
  const { labels, components } = labelComponents(foreground, info.width, info.height);
  let globe = components
    .filter((component) => component.area > 1_000 && component.centerY < info.height * 0.58)
    .sort((a, b) => b.area - a.area)[0];
  let book = components
    .filter((component) => component.area > 1_000 && component.centerY >= info.height * 0.45)
    .sort((a, b) => b.area - a.area)[0];
  const connectedComposition = !globe || !book;
  if (connectedComposition) {
    globe = measureRegion(foreground, info.width, info.height, (x, y) => y < 200 && x > 45 && x < info.width - 45);
    book = measureRegion(foreground, info.width, info.height, (_x, y) => y >= 180);
  }
  if (!globe || !book) throw new Error(`Could not measure composition in ${fileName}`);
  frames.push({ fileName, data, info, foreground, labels, components, globe, book, connectedComposition });
}

const targets = {
  globeX: median(frames.map((frame) => frame.globe.centerX)),
  globeY: median(frames.map((frame) => frame.globe.centerY)),
  bookX: median(frames.map((frame) => frame.book.centerX)),
  bookBottom: median(frames.map((frame) => frame.book.maxY)),
  globeWidth: median(frames.filter((frame) => frame.fileName !== "frame-21.png").map((frame) => frame.globe.maxX - frame.globe.minX + 1)),
  globeHeight: median(frames.filter((frame) => frame.fileName !== "frame-21.png").map((frame) => frame.globe.maxY - frame.globe.minY + 1)),
  bookWidth: median(frames.filter((frame) => frame.fileName !== "frame-21.png").map((frame) => frame.book.maxX - frame.book.minX + 1)),
  bookHeight: median(frames.filter((frame) => frame.fileName !== "frame-21.png").map((frame) => frame.book.maxY - frame.book.minY + 1)),
};

const windSource = frames.find((frame) => frame.fileName === "frame-19.png");
if (!windSource) throw new Error("Could not find wind decoration source");
const windOverlay = Buffer.alloc(windSource.info.width * windSource.info.height * 4);
const windShiftX = Math.round(targets.globeX - windSource.globe.centerX);
const windShiftY = Math.round(targets.globeY - windSource.globe.centerY);
const windLabels = new Set(windSource.components
  .filter((component) => component.area <= 1_000 && component.centerY < windSource.info.height * 0.68)
  .map((component) => component.label));

for (let index = 0; index < windSource.foreground.length; index++) {
  if (!windSource.foreground[index] || !windLabels.has(windSource.labels[index])) continue;
  const x = index % windSource.info.width;
  const y = Math.floor(index / windSource.info.width);
  const destinationX = x + windShiftX;
  const destinationY = y + windShiftY;
  if (destinationX < 0 || destinationX >= windSource.info.width || destinationY < 0 || destinationY >= windSource.info.height) continue;
  windSource.data.copy(windOverlay, (destinationY * windSource.info.width + destinationX) * 4, index * 4, index * 4 + 4);
}

await mkdir(outputDirectory, { recursive: true });

for (const frame of frames) {
  const { width, height } = frame.info;
  const output = Buffer.alloc(width * height * 4);
  const splitY = (frame.globe.maxY + frame.book.minY) / 2;
  const upperShiftX = Math.round(targets.globeX - frame.globe.centerX);
  const upperShiftY = Math.round(targets.globeY - frame.globe.centerY);
  const lowerShiftX = Math.round(targets.bookX - frame.book.centerX);
  const lowerShiftY = Math.round(targets.bookBottom - frame.book.maxY);
  const upperLabels = new Set(frame.components.filter((component) => component.centerY < splitY).map((component) => component.label));
  const decorationLabels = new Set(frame.components.filter((component) => component.area <= 1_000).map((component) => component.label));

  if (frame.fileName === "frame-21.png") {
    const lowerLabels = new Set(frame.components.filter((component) => !upperLabels.has(component.label) && !decorationLabels.has(component.label)).map((component) => component.label));
    const contentUpperLabels = new Set([...upperLabels].filter((label) => !decorationLabels.has(label)));
    const upperComponents = frame.components.filter((component) => contentUpperLabels.has(component.label));
    const lowerComponents = frame.components.filter((component) => lowerLabels.has(component.label));
    const globeScale = Math.min(
      targets.globeWidth / (frame.globe.maxX - frame.globe.minX + 1),
      targets.globeHeight / (frame.globe.maxY - frame.globe.minY + 1),
    );
    const bookScale = Math.min(
      targets.bookWidth / (frame.book.maxX - frame.book.minX + 1),
      targets.bookHeight / (frame.book.maxY - frame.book.minY + 1),
    );
    await placeScaledGroup(output, frame, contentUpperLabels, unionBounds(upperComponents), globeScale, { x: frame.globe.centerX, y: frame.globe.centerY }, { x: targets.globeX, y: targets.globeY });
    await placeScaledGroup(output, frame, lowerLabels, unionBounds(lowerComponents), bookScale, { x: frame.book.centerX, y: frame.book.maxY }, { x: targets.bookX, y: targets.bookBottom });
  } else {

    for (let index = 0; index < frame.foreground.length; index++) {
      if (!frame.foreground[index]) continue;
      if (decorationLabels.has(frame.labels[index])) continue;
      const x = index % width;
      const y = Math.floor(index / width);
      const isUpper = upperLabels.has(frame.labels[index]);
      const useUpperShift = isUpper && !frame.connectedComposition;
      const destinationX = x + (useUpperShift ? upperShiftX : lowerShiftX);
      const destinationY = y + (useUpperShift ? upperShiftY : lowerShiftY);
      if (destinationX < 0 || destinationX >= width || destinationY < 0 || destinationY >= height) continue;
      const sourceOffset = index * 4;
      const destinationOffset = (destinationY * width + destinationX) * 4;
      output[destinationOffset] = frame.data[sourceOffset];
      output[destinationOffset + 1] = frame.data[sourceOffset + 1];
      output[destinationOffset + 2] = frame.data[sourceOffset + 2];
      output[destinationOffset + 3] = 255;
    }
  }

  const frameNumber = Number.parseInt(frame.fileName.slice(6, 8), 10);
  const animationIndex = animationOrder.indexOf(frameNumber);
  const windPhase = animationIndex >= 0 ? animationIndex % 4 : 0;
  const windHorizontalOffsets = [0, 2, 0, -2];
  const windVerticalOffsets = [0, -1, -2, -1];

  for (let index = 0; index < windOverlay.length; index += 4) {
    if (!windOverlay[index + 3]) continue;
    const x = (index / 4) % width;
    const y = Math.floor(index / 4 / width);
    const sideDirection = x < width / 2 ? -1 : 1;
    const destinationX = x + windHorizontalOffsets[windPhase] * sideDirection;
    const destinationY = y + windVerticalOffsets[windPhase];
    if (destinationX < 0 || destinationX >= width || destinationY < 0 || destinationY >= height) continue;
    windOverlay.copy(output, (destinationY * width + destinationX) * 4, index, index + 4);
  }

  const isGeneratedTransition = ["frame-22.png", "frame-23.png", "frame-24.png"].includes(frame.fileName);
  let renderedFrame = sharp(output, { raw: { width, height, channels: 4 } });
  if (isGeneratedTransition) renderedFrame = renderedFrame.modulate({ brightness: 0.94, saturation: 0.82 });

  await renderedFrame
    .png({ compressionLevel: 9, palette: true })
    .toFile(path.join(outputDirectory, frame.fileName));
  console.log(`${frame.fileName}: ${frame.connectedComposition ? "composition" : "globe"} shift ${frame.connectedComposition ? `${lowerShiftX},${lowerShiftY}` : `${upperShiftX},${upperShiftY}`}; book shift ${lowerShiftX},${lowerShiftY}`);
}

console.log(`Processed ${frames.length} transparent, aligned frames in ${outputDirectory}`);

const animationFrames = await Promise.all(animationOrder.map(async (frameNumber) => {
  const framePath = path.join(outputDirectory, `frame-${String(frameNumber).padStart(2, "0")}.png`);
  return sharp(framePath).ensureAlpha().raw().toBuffer();
}));
const animationWidth = frames[0].info.width;
const animationHeight = frames[0].info.height;

await sharp(Buffer.concat(animationFrames), {
  raw: {
    width: animationWidth,
    height: animationHeight * animationFrames.length,
    channels: 4,
    pageHeight: animationHeight,
  },
})
  .webp({ lossless: true, loop: 0, delay: animationOrder.map(() => 220) })
  .toFile(animationOutputPath);

console.log(`Created ${animationOrder.length}-frame animation at ${animationOutputPath}`);
