import { Footer } from "@/components/molecules/globals/footer";
import { Header } from "@/components/molecules/globals/header";

import "@/styles/globals.css";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-50">
      {/* Subtle top fade like the screenshot */}
      <div className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-48 bg-gradient-to-b from-slate-200/70 to-transparent" />

      {/* Ánh sáng tím (soft glow) */}
      <div className="pointer-events-none fixed -top-40 -left-40 -z-10 h-[620px] w-[620px] rounded-full bg-violet-600/25 blur-[140px]" />
      <div className="pointer-events-none fixed -right-40 -bottom-48 -z-10 h-[620px] w-[620px] rounded-full bg-indigo-500/20 blur-[150px]" />

      {/* Nội dung chính */}
      <div className="relative z-0">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
}
