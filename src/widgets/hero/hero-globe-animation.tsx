import Image from "next/image";

export function HeroGlobeAnimation() {
  return (
    <picture className="hero-globe-animation">
      <source media="(prefers-reduced-motion: reduce)" srcSet="/images/hero-frames-transparent/frame-01.png" />
      <Image src="/images/hero-globe-animation.webp" alt="" width={335} height={369} priority unoptimized />
    </picture>
  );
}
