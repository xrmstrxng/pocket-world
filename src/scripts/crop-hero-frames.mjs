import { mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const outputDirectory = path.resolve("public/images/hero-frames");
const frameWidth = 335;
const frameHeight = 369;

const sheets = [
  { path: path.resolve("image.png"), firstFrame: 1, topInset: 50, horizontalInset: 10 },
  { path: path.resolve("3da3b4b3-6013-4ac9-824e-69bc156ec9f4.png"), firstFrame: 11, topInset: 80, horizontalInset: 0 },
];

await mkdir(outputDirectory, { recursive: true });

for (const sheet of sheets) {
  const metadata = await sharp(sheet.path).metadata();
  if (!metadata.width || !metadata.height) throw new Error(`Could not read ${sheet.path}`);

  for (let index = 0; index < 10; index++) {
    const column = index % 5;
    const row = Math.floor(index / 5);
    const cellLeft = Math.round(column * metadata.width / 5);
    const cellRight = Math.round((column + 1) * metadata.width / 5);
    const cellTop = Math.round(row * metadata.height / 2);
    const availableWidth = cellRight - cellLeft - sheet.horizontalInset * 2;
    const extractWidth = Math.min(frameWidth, availableWidth);
    const extracted = await sharp(sheet.path)
      .extract({
        left: cellLeft + sheet.horizontalInset + Math.max(0, Math.floor((availableWidth - extractWidth) / 2)),
        top: cellTop + sheet.topInset,
        width: extractWidth,
        height: frameHeight,
      })
      .toBuffer();
    const leftPadding = Math.floor((frameWidth - extractWidth) / 2);
    const rightPadding = frameWidth - extractWidth - leftPadding;
    const frameNumber = String(sheet.firstFrame + index).padStart(2, "0");

    await sharp(extracted)
      .extend({
        left: leftPadding,
        right: rightPadding,
        top: 0,
        bottom: 0,
        extendWith: "copy",
      })
      .png({ compressionLevel: 9 })
      .toFile(path.join(outputDirectory, `frame-${frameNumber}.png`));
    console.log(`Cropped frame-${frameNumber}.png from ${path.basename(sheet.path)}`);
  }
}

const bridgeSourcePath = path.resolve("ChatGPT Image 22_07_2026, 14_33_59.png");
const bridgeMetadata = await sharp(bridgeSourcePath).metadata();
if (!bridgeMetadata.width || !bridgeMetadata.height) throw new Error(`Could not read ${bridgeSourcePath}`);
const bridgeWidth = Math.round(bridgeMetadata.width * 0.678);
const bridgeHeight = Math.round(bridgeMetadata.height * 0.746);

await sharp(bridgeSourcePath)
  .extract({
    left: Math.round((bridgeMetadata.width - bridgeWidth) / 2),
    top: Math.round(bridgeMetadata.height * 0.132),
    width: bridgeWidth,
    height: bridgeHeight,
  })
  .resize(frameWidth, frameHeight, { fit: "fill", kernel: sharp.kernel.nearest })
  .png({ compressionLevel: 9 })
  .toFile(path.join(outputDirectory, "frame-21.png"));

console.log(`Cropped frame-21.png from ${path.basename(bridgeSourcePath)}`);

const generatedTransitions = [
  { frame: 22, source: "transition-25.png" },
  { frame: 23, source: "transition-50.png" },
  { frame: 24, source: "transition-75.png" },
];

for (const transition of generatedTransitions) {
  const sourcePath = path.resolve("public/images/hero-generated-sources", transition.source);
  await sharp(sourcePath)
    .resize(frameWidth, frameHeight, { fit: "fill", kernel: sharp.kernel.nearest })
    .png({ compressionLevel: 9 })
    .toFile(path.join(outputDirectory, `frame-${transition.frame}.png`));
  console.log(`Prepared frame-${transition.frame}.png from ${transition.source}`);
}
