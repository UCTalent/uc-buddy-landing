import type { LucideIcon } from "lucide-react";
import { FilePenLine, Mic, Sparkles, Target } from "lucide-react";

import { ScrollReveal } from "@/components/molecules/scroll-reveal";
import { StoreDownloadButtons } from "@/components/molecules/store-download-buttons";

const features: {
  icon: LucideIcon;
  title: string;
  desc: string;
}[] = [
  {
    icon: Sparkles,
    title: "AI Resume Builder",
    desc: "Create a professional resume in minutes with AI-powered content generation.",
  },
  {
    icon: Target,
    title: "Smart Tailoring",
    desc: "Tailor your resume to a job description and highlight the skills that matter.",
  },
  {
    icon: FilePenLine,
    title: "Content Enhancement",
    desc: "Improve clarity, tone, and impact with clean rewrites and stronger bullet points.",
  },
  {
    icon: Mic,
    title: "Voice-to-CV",
    desc: "Speak naturally; UCBuddy turns your story into structured resume content.",
  },
];

const faqs = [
  {
    q: "Is UCBuddy free to use?",
    a: "You can start with the open beta for free. Pricing may change as we add more features.",
  },
  {
    q: "Do you support both iOS and Android?",
    a: "Yes. We're preparing distribution for both platforms.",
  },
  {
    q: "Can I tailor a resume for a specific job?",
    a: "Yes. Paste a job description and UCBuddy helps you tailor your resume content.",
  },
];

const avatars = [
  { initials: "JD", className: "bg-blue-500" },
  { initials: "AS", className: "bg-sky-400" },
  { initials: "MI", className: "bg-violet-500" },
  { initials: "+", className: "bg-slate-100 text-slate-500" },
];

export default function HomePage() {
  return (
    <main className="w-full">
      {/* HERO */}
      <section id="home" className="scroll-mt-header relative overflow-hidden pb-20 text-center md:pb-24">
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 flex justify-center"
          aria-hidden
        >
          <div className="relative h-56 w-[min(100%,56rem)] md:h-72">
            <div className="absolute inset-x-[6%] bottom-0 h-full rounded-[50%] bg-[radial-gradient(ellipse_at_center_bottom,rgba(196,181,253,0.7)_0%,rgba(237,233,254,0.45)_42%,transparent_72%)]" />
            <div className="absolute inset-x-[12%] bottom-2 h-[88%] rounded-[50%] bg-violet-200/35 blur-2xl" />
            <div className="absolute inset-x-0 bottom-0 h-[70%] rounded-[50%] bg-violet-100/50 blur-3xl" />
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 pt-16 sm:px-6 md:pt-20 lg:px-8">
          <ScrollReveal delay={0}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-1.5 text-xs font-semibold text-violet-700 transition-colors duration-300 hover:border-violet-300 hover:bg-violet-100">
              <Sparkles className="size-3.5 text-violet-600" aria-hidden />
              <span>AI-Powered Career Advancement</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <h1 className="mx-auto max-w-3xl text-4xl leading-tight font-extrabold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
              Build a Professional Resume in
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-slate-500 md:text-base">
              Create, improve, and tailor your CV for every opportunity. UCBuddy helps students,
              graduates, and professionals build stronger resumes and advance their careers with
              AI-powered guidance.
            </p>
          </ScrollReveal>

        {/* DOWNLOAD */}
        <section
          id="download"
          className="scroll-mt-header bg-violet-50/40 px-4 py-16 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-3xl text-center">
            <ScrollReveal>
              <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl">
                Download the app
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-sm text-slate-500 md:text-base">
                Get UCBuddy on your phone and start building your resume today.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={120} className="mt-8">
              <StoreDownloadButtons />
            </ScrollReveal>
          </div>
        </section>

          <ScrollReveal delay={320}>
            <div className="mt-10 flex flex-col items-center gap-3">
              <div className="flex items-center justify-center -space-x-2.5">
                {avatars.map((avatar) => (
                  <div
                    key={avatar.initials}
                    className={`flex size-10 items-center justify-center rounded-full border-2 border-white text-xs font-bold shadow-sm transition-transform duration-300 hover:z-10 hover:scale-110 ${
                      avatar.initials === "+"
                        ? "bg-slate-100 text-slate-500"
                        : `${avatar.className} text-white`
                    }`}
                  >
                    {avatar.initials}
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-500 md:text-sm">
                Trusted by thousands of students and graduates.
              </p>
            </div>
          </ScrollReveal>
        </div>

        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-px bg-violet-300/50"
          aria-hidden
        />
      </section>

      

      {/* FEATURES */}
      <section id="features" className="scroll-mt-header px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
            {features.map((item, index) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={item.title} delay={index * 100}>
                  <div className="feature-card-hover group flex h-full cursor-default gap-5 rounded-2xl border border-slate-100/80 bg-white p-6 md:p-7">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-violet-100 transition-all duration-300 group-hover:scale-110 group-hover:bg-violet-200">
                      <Icon
                        className="size-5 text-violet-600 transition-transform duration-300 group-hover:scale-105"
                        strokeWidth={2}
                        aria-hidden
                      />
                    </div>
                    <div className="min-w-0 text-left">
                      <h3 className="text-base font-bold text-slate-900 transition-colors duration-300 group-hover:text-violet-700">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-header px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-left">
          <ScrollReveal>
            <h2 className="text-center text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl">
              FAQ
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-slate-500 md:text-base">
              Quick answers to common questions.
            </p>
          </ScrollReveal>

          <div className="mt-10 space-y-3">
            {faqs.map((item, index) => (
              <ScrollReveal key={item.q} delay={index * 80}>
                <details className="group rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-all duration-300 hover:border-violet-200 hover:shadow-md">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-slate-900">
                    <span>{item.q}</span>
                    <span className="text-slate-400 transition duration-300 group-open:rotate-45 group-hover:text-violet-500">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-slate-500">{item.a}</p>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="scroll-mt-header px-4 pb-20 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto max-w-4xl">
            <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm transition-all duration-300 hover:border-violet-200 hover:shadow-lg hover:shadow-violet-100/40">
              <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-2xl bg-slate-900 text-2xl text-white transition-transform duration-300 hover:scale-105">
                💬
              </div>

              <h2 className="mb-3 text-2xl font-extrabold text-slate-900 md:text-3xl">
                Need Help or Want to Give Feedback?
              </h2>

              <p className="mx-auto mb-8 max-w-2xl text-sm leading-relaxed text-slate-500 md:text-base">
                We're actively improving UCBuddy and would love to hear from you. Whether you've
                found a bug, have a feature suggestion, or need assistance using the app, our team is
                ready to help.
              </p>

              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="mailto:support@uctalent.io?subject=UCBuddy Support Request"
                  className="btn-hover-lift inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800 hover:shadow-lg sm:w-auto"
                >
                  Contact Support
                </a>

                <a
                  href="mailto:support@uctalent.io?subject=Bug Report"
                  className="btn-hover-lift inline-flex w-full items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:border-violet-300 hover:bg-violet-50 hover:shadow-md sm:w-auto"
                >
                  Report a Bug
                </a>
              </div>

              <div className="mt-8 border-t border-slate-100 pt-6">
                <p className="text-xs text-slate-500">Email us at</p>
                <a
                  href="mailto:support@uctalent.io"
                  className="font-semibold text-indigo-600 transition-colors hover:text-violet-700"
                >
                  support@uctalent.io
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
