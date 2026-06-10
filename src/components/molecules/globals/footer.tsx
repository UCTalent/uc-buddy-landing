"use client";

import Link from "next/link";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-slate-150 relative z-20 border-t bg-slate-50 py-8 text-center dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-2 px-4">
        <p className="font-sans text-xs tracking-wide text-slate-400 md:text-sm dark:text-slate-500">
          © {currentYear} UCBuddy AI. All rights reserved.
        </p>

        <div className="flex items-center gap-4 text-xs font-medium text-slate-400 dark:text-slate-500">
          <Link
            href="/privacy-policy"
            className="underline underline-offset-4 transition-colors hover:text-violet-600 dark:hover:text-violet-400"
          >
            Privacy Policy
          </Link>

          <span className="text-slate-300 dark:text-slate-700">|</span>

          <Link
            href="/terms-of-use"
            className="underline underline-offset-4 transition-colors hover:text-violet-600 dark:hover:text-violet-400"
          >
            Terms of Use
          </Link>

          <span className="text-slate-300 dark:text-slate-700">|</span>

          <Link
            href="/delete-account"
            className="underline underline-offset-4 transition-colors hover:text-violet-600 dark:hover:text-violet-400"
          >
            Delete Account
          </Link>
        </div>
      </div>
    </footer>
  );
};
