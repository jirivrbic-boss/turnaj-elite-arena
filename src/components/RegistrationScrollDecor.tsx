"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const GRENADE_LEFT = "/fotky/grenade-left.png";
const GRENADE_RIGHT = "/fotky/grenade-right.png";

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

/** Půlkruh ze kraje obrazovky dolů / nahoru podle scrollu. */
function arcOffset(progress: number, side: "left" | "right") {
  const t = clamp(progress, 0, 1);
  const angle = -Math.PI / 2 + t * Math.PI;
  const radius = 120;

  const arcX = radius * Math.cos(angle);
  const arcY = radius * (Math.sin(angle) + 1);

  const sign = side === "left" ? -1 : 1;

  return {
    x: -sign * arcX * 0.75,
    y: arcY,
    rotate: sign * (22 - t * 36),
  };
}

type GrenadeProps = {
  src: string;
  side: "left" | "right";
  progress: number;
};

function ScrollGrenade({ src, side, progress }: GrenadeProps) {
  const { x, y, rotate } = arcOffset(progress, side);

  return (
    <div
      className={`pointer-events-none absolute top-36 z-0 hidden w-44 will-change-transform lg:block lg:w-52 xl:top-40 xl:w-60 2xl:w-64 ${
        side === "left"
          ? "left-[clamp(0.25rem,2vw,2.5rem)]"
          : "right-[clamp(0.25rem,2vw,2.5rem)]"
      }`}
      style={{
        transform: `translate(${x}px, ${y}px) rotate(${rotate}deg)`,
      }}
      aria-hidden
    >
      <Image
        src={src}
        alt=""
        width={512}
        height={512}
        unoptimized
        className="h-auto w-full"
        sizes="(min-width: 1536px) 256px, 208px"
      />
    </div>
  );
}

export function RegistrationScrollDecor({
  children,
}: {
  children: React.ReactNode;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let frame = 0;

    const update = () => {
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;

      const enter = vh * 0.9;
      const exit = -rect.height * 0.4;
      const raw = (enter - rect.top) / (enter - exit);

      setProgress(clamp(raw, 0, 1));
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        update();
      });
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="prihlaska"
      className="relative overflow-hidden border-t border-accent/15 py-24"
    >
      <ScrollGrenade src={GRENADE_LEFT} side="left" progress={progress} />
      <ScrollGrenade src={GRENADE_RIGHT} side="right" progress={progress} />

      <div className="relative z-10 mx-auto max-w-2xl px-6">{children}</div>
    </section>
  );
}
