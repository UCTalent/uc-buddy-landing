function AppleIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function GooglePlayIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path fill="#00D7FF" d="M3.6 1.8v20.4l11.2-10.2L3.6 1.8z" />
      <path fill="#FFD300" d="M14.8 12 3.6 22.2l8.4-8.4 2.8-1z" />
      <path fill="#FF3A44" d="M3.6 1.8l11.2 10.2-2.8-1.4L3.6 1.8z" />
      <path fill="#00F076" d="M14.8 12l8.4 8.4c1.2-1.2 1.2-3.2 0-4.4L14.8 12z" />
    </svg>
  );
}

type StoreButtonProps = {
  href?: string;
};

export function StoreDownloadButtons({ href = "#" }: StoreButtonProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-center">
      <a
        href={href}
        className="btn-hover-lift inline-flex min-w-[220px] items-center gap-3.5 rounded-full bg-violet-600 px-5 py-2.5 text-left shadow-md shadow-violet-300/40 hover:bg-violet-700 hover:shadow-lg hover:shadow-violet-300/50"
      >
        <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-violet-500/60">
          <span className="flex size-7 items-center justify-center rounded-md bg-white">
            <AppleIcon className="size-4 text-black" />
          </span>
        </span>
        <span className="leading-tight text-white">
          <span className="block text-[10px] font-semibold tracking-[0.12em] uppercase opacity-90">
            Download on the
          </span>
          <span className="block text-base font-bold tracking-tight">App Store</span>
        </span>
      </a>

      <a
        href={href}
        className="btn-hover-lift inline-flex min-w-[220px] items-center gap-3.5 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-left shadow-md shadow-slate-200/60 hover:border-violet-200 hover:bg-violet-50/50 hover:shadow-lg hover:shadow-slate-200/70"
      >
        <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-slate-100">
          <span className="flex size-7 items-center justify-center rounded-md bg-slate-900">
            <GooglePlayIcon className="size-4" />
          </span>
        </span>
        <span className="leading-tight text-slate-900">
          <span className="block text-[10px] font-semibold tracking-[0.12em] text-slate-500 uppercase">
            Get it on
          </span>
          <span className="block text-base font-bold tracking-tight">Google Play</span>
        </span>
      </a>
    </div>
  );
}
