"use client";

const getHeaderOffset = (): number => {
  const header = document.querySelector("header");
  return header?.getBoundingClientRect().height ?? 64;
};

const easeInOutCubic = (t: number): number =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

export const scrollToSection = (id: string): void => {
  if (typeof window === "undefined") return;

  const element = document.getElementById(id);
  if (!element) {
    return;
  }

  const targetY = Math.max(
    0,
    element.getBoundingClientRect().top + window.scrollY - getHeaderOffset() - 16
  );

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReducedMotion) {
    window.scrollTo({ top: targetY, behavior: "auto" });
    return;
  }

  const startY = window.scrollY;
  const distance = targetY - startY;
  const duration = 900;

  if (Math.abs(distance) < 4) return;

  let startTime: number | null = null;

  const step = (timestamp: number) => {
    if (startTime === null) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);

    window.scrollTo(0, startY + distance * easeInOutCubic(progress));

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
};

/** @deprecated Use scrollToSection */
export const scrollToElement = scrollToSection;
