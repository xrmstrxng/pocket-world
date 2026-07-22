import frameOrder from "./hero-animation-order.json";

export const heroAnimationFrames = frameOrder.map((frame) =>
  `/images/hero-frames-transparent/frame-${String(frame).padStart(2, "0")}.png`,
);
