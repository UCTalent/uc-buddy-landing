"use client";

import Link from "next/link";
import type { MouseEvent } from "react";

import { MobileNav } from "@/components/molecules/globals/mobile-nav";
import { scrollToSection } from "@/helpers/scrollToElement";

const navLinkClass =
  "cursor-pointer text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-violet-600";

const NAV_ITEMS = [
  { id: "features", label: "Features" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
] as const;

export const Header = () => {
  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    event.preventDefault();
    scrollToSection(sectionId);
    window.history.replaceState(null, "", `#${sectionId}`);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="group">
            <span className="text-xl font-black tracking-tight text-violet-600 transition-transform group-hover:scale-[1.02]">
              UCBuddy
            </span>
          </Link>

          <div className="flex items-center gap-6 md:gap-8">
            <nav className="hidden items-center gap-8 md:flex">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={navLinkClass}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
};
