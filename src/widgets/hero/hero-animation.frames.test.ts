import { describe, expect, it } from "vitest";
import { heroAnimationFrames } from "./hero-animation.frames";

describe("hero animation frames", () => {
  it("keeps the curated rotation order", () => {
    const expectedOrder = [1, 2, 3, 4, 5, 6, 7, 8, 9, 15, 18, 21, 23];
    expect(heroAnimationFrames).toHaveLength(13);
    expect(heroAnimationFrames).toEqual(expectedOrder.map((frame) =>
      `/images/hero-frames-transparent/frame-${String(frame).padStart(2, "0")}.png`,
    ));
  });
});
