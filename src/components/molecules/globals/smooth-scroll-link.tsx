"use client";

import type { MouseEvent, ReactNode } from "react";

import { scrollToSection } from "@/helpers/scrollToElement";
import { cn } from "@/lib/utils";

type SmoothScrollLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  onAfterScroll?: () => void;
};

export function SmoothScrollLink({
  href,
  children,
  className,
  onAfterScroll,
}: SmoothScrollLinkProps) {
  const sectionId = href.startsWith("#") ? href.slice(1) : href;

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!sectionId) return;

    event.preventDefault();
    scrollToSection(sectionId);
    window.history.pushState(null, "", `#${sectionId}`);
    onAfterScroll?.();
  };

  return (
    <a href={href} onClick={handleClick} className={cn(className)}>
      {children}
    </a>
  );
}
