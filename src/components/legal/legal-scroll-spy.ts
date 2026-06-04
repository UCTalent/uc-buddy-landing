"use client";

import { useEffect, useRef } from "react";

export function useLegalScrollSpy() {
  const isScrollingRef = useRef(false);

  const setActive = (id: string) => {
    const navLinks = document.querySelectorAll("[data-href]");
    navLinks.forEach((link) => link.classList.remove("active-nav"));

    document
      .querySelector(`[data-href="#${id}"]`)
      ?.classList.add("active-nav");
  };

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll("main section")
    ) as HTMLElement[];

    const onScroll = () => {
      if (isScrollingRef.current) return;

      const headerHeight =
        document.querySelector("header")?.offsetHeight ?? 64;

      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 50;

      if (nearBottom) {
        const lastSection = sections[sections.length - 1];
        if (lastSection) setActive(lastSection.id);
        return;
      }

      const triggerOffset = Math.min(
        200,
        window.innerHeight / 3
      );

      const scrollPosition =
        window.scrollY +
        headerHeight +
        triggerOffset;

      let currentId = sections[0]?.id;

      sections.forEach((section) => {
        if (scrollPosition >= section.offsetTop) {
          currentId = section.id;
        }
      });

      if (currentId) setActive(currentId);
    };

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    setTimeout(() => onScroll(), 100);

    return () =>
      window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection =
    (id: string) =>
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();

      const el = document.getElementById(id);

      if (!el) return;

      const headerHeight =
        document.querySelector("header")?.offsetHeight ?? 64;

      const top =
        el.getBoundingClientRect().top +
        window.scrollY -
        headerHeight -
        24;

      setActive(id);

      isScrollingRef.current = true;

      window.scrollTo({
        top,
        behavior: "smooth",
      });

      setTimeout(() => {
        isScrollingRef.current = false;
      }, 500);
    };

  return { scrollToSection };
}