"use client";

import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageProvider";

const YOUTUBE_VIDEO_ID = "fa9fj68r0vg";
const LOGO_SRC = "/fotky/logo elite arena.png";

export function HeroSection() {
  const { t } = useLanguage();

  const scrollToForm = () => {
    document.getElementById("prihlaska")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <iframe
          className="absolute left-1/2 top-1/2 h-[56.25vw] min-h-full min-w-[177.78vh] w-[177.78vh] -translate-x-1/2 -translate-y-1/2 scale-110"
          src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${YOUTUBE_VIDEO_ID}&start=1&controls=0&modestbranding=1&playsinline=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1`}
          title={t.hero.videoTitle}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>

      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/75 via-black/88 to-black" />
      <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,transparent_0%,#000000_78%)]" />

      <div className="relative z-20 mx-auto w-full max-w-5xl overflow-visible px-8 py-32 text-center sm:px-10">
        <div className="mb-8 flex justify-center">
          <Image
            src={LOGO_SRC}
            alt="Elite Arena"
            width={320}
            height={120}
            priority
            className="h-auto w-48 drop-shadow-[0_0_24px_rgba(255,184,0,0.35)] md:w-64 lg:w-72"
          />
        </div>

        <h1 className="heading-display overflow-visible text-[clamp(2.25rem,8vw,5rem)] leading-[1.1]">
          <span className="text-gradient-hero-glow">
            <span className="text-gradient-hero">{t.hero.titleLine1}</span>
          </span>
          <br />
          <span className="inline-block px-1 text-accent text-glow-accent">
            {t.hero.titleLine2}
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-text-muted md:text-xl">
          {t.hero.subtitle}
        </p>

        <button
          type="button"
          onClick={scrollToForm}
          className="group relative mt-10 inline-block cursor-pointer border-0 bg-transparent p-0"
        >
          <span className="clip-gaming inline-block bg-accent px-10 py-4 heading-display text-lg tracking-wider text-black shadow-[0_0_30px_rgba(255,184,0,0.45)] transition-transform hover:scale-[1.02] hover:bg-accent-bright">
            {t.hero.cta}
          </span>
          <span className="absolute -inset-1 -z-10 animate-pulse-glow bg-accent/30 blur-xl" />
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 animate-bounce">
        <svg className="h-6 w-6 text-accent/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
