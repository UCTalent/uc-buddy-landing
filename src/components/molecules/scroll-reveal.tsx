"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger delay in ms */
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  /** Reveal when this much of element is visible (0–1) */
  threshold?: number;
};

const hiddenByDirection: Record<NonNullable<ScrollRevealProps["direction"]>, string> = {
  up: "translate-y-8 opacity-0",
  down: "-translate-y-8 opacity-0",
  left: "translate-x-8 opacity-0",
  right: "-translate-x-8 opacity-0",
};

export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
  threshold = 0.12,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: "0px 0px -48px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={cn(
        "scroll-reveal transition-all duration-700 ease-out motion-reduce:translate-none motion-reduce:opacity-100 motion-reduce:transition-none",
        !visible && hiddenByDirection[direction],
        visible && "translate-x-0 translate-y-0 opacity-100",
        className
      )}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}
