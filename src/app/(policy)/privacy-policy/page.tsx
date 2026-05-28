"use client";

import { useEffect, useRef } from "react";
// import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

// import { PRIVACY_POLICY_METADATA } from "@/data/metadataSEO"; 

// export const metadata: Metadata = PRIVACY_POLICY_METADATA; 

export default function PrivacyPolicyPage() {
  const isScrollingRef = useRef(false);

  const setActive = (id: string) => {
    const navLinks = document.querySelectorAll("[data-href]");

    navLinks.forEach((link) => {
      link.classList.remove("active-nav");
    });

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
        document.querySelector("header")?.offsetHeight ?? 80;

      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 50;

      if (nearBottom) {
        const lastSection = sections[sections.length - 1];

        if (lastSection) {
          setActive(lastSection.id);
        }

        return;
      }

      const scrollPosition = window.scrollY + headerHeight + 140;

      let currentId = sections[0]?.id;

      sections.forEach((section) => {
        if (scrollPosition >= section.offsetTop) {
          currentId = section.id;
        }
      });

      if (currentId) {
        setActive(currentId);
      }
    };

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const scrollToSection =
    (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();

      const el = document.getElementById(id);

      if (!el) return;

      const headerHeight =
        document.querySelector("header")?.offsetHeight ?? 80;

      const top =
        el.getBoundingClientRect().top +
        window.scrollY -
        headerHeight -
        16;

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

  return (
    <div className="min-h-screen bg-slate-50 leading-loose text-slate-900">
      <style>{`
        .nav-link.active-nav {
          color: rgb(79, 70, 229);
          border-left-color: rgb(79, 70, 229);
          font-weight: 500;
        }
      `}</style>
      
      {/* HEADER  */}
      <header className="sticky top-0 z-10 border-b border-slate-200 bg-white py-5">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6">
          {/* <Link href="/" className="flex items-center gap-2.5 no-underline">
            <Image
              src="/images/ucbuddy-logo.png"
              alt="UCBuddy Logo"
              width={40}
              height={40}
              className="rounded-lg"
              priority
            />
            <span className="text-3xl font-semibold text-slate-900">UCBuddy</span>
          </Link> */}
          <Link href="#" className="flex items-center gap-2.5 no-underline">
            <Image
              src="/images/ucbuddy-logo.png"
              alt="UCBuddy Logo"
              width={40}
              height={40}
              className="rounded-lg"
              priority
            />
            <span className="text-3xl font-semibold text-slate-900">UCBuddy</span>
          </Link>
        </div>
      </header>

      {/* PAGE GRID  */}
      <div className="mx-auto grid max-w-4xl grid-cols-1 items-start gap-12 px-4 py-12 lg:grid-cols-[200px_1fr] lg:gap-30 lg:py-20">
        
        {/* SIDEBAR */}
        <aside className="sticky top-[85px] hidden pt-12 lg:block">
          <p className="mb-3 text-base font-medium tracking-wider text-slate-500 uppercase">Contents</p>
          <nav className="flex flex-col space-y-0.5">
            {[
              { id: "intro", label: "Introduction" },
              { id: "collect", label: "What We Collect" },
              { id: "use", label: "How We Use It" },
              { id: "third-party", label: "Third-Party Services" },
              { id: "ai", label: "AI Processing" },
              { id: "sharing", label: "Data Sharing" },
              { id: "retention", label: "Data Retention" },
              { id: "rights", label: "User Rights" },
              { id: "security", label: "Security" },
              { id: "children", label: "Children's Privacy" },
              { id: "permissions", label: "Permissions" },
              { id: "contact", label: "Contact" },
              { id: "changes", label: "Changes" },
            ].map((item) => (
              <a
                key={item.id}
                data-href={`#${item.id}`}
                href={`#${item.id}`}
                onClick={scrollToSection(item.id)}
                className="nav-link block border-l-2 border-transparent px-2.5 py-1 text-base text-slate-600 transition-colors duration-150 hover:border-indigo-600 hover:text-indigo-600"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </aside>

        {/* MAIN */}
        <main className="pt-12 lg:pt-0">
          <h1 className="mb-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">UCBuddy Privacy Policy</h1>
          <p className="mb-12 text-xl text-slate-600">
            This policy describes how UCBuddy collects, uses, stores, and protects your information.
            By using UCBuddy, you acknowledge that you have read and understood this policy.
          </p>

          {/* 1. INTRO  */}
          <section id="intro" className="mb-11">
            <div className="mb-3.5 flex items-center gap-2.5 border-b border-slate-200 pb-3">
              <span className="rounded border border-indigo-200 bg-indigo-50 px-2 py-0.5 text-sm font-medium text-indigo-600">
                01
              </span>
              <h2 className="text-3xl font-bold text-slate-900">Introduction</h2>
            </div>
            <p className="mb-4 text-lg text-slate-600">
              UCBuddy is an AI-powered CV builder and career assistance platform that helps users
              create, improve, organize, and manage professional resumes. The platform leverages
              artificial intelligence to assist with resume generation, CV optimization, grammar
              improvement, career guidance, and professional PDF export.
            </p>
            <p className="text-xl leading-8 text-slate-600">
              UCBuddy is designed to support students, recent graduates, career changers, and
              professionals throughout the job application process by providing accessible tools
              that simplify resume creation and improve job readiness.
            </p>
          </section>

          {/* 2. COLLECT */}
          <section id="collect" className="mb-11">
            <div className="mb-3.5 flex items-center gap-2.5 border-b border-slate-200 pb-3">
              <span className="rounded border border-indigo-200 bg-indigo-50 px-2 py-0.5 text-sm font-medium text-indigo-600">
                02
              </span>
              <h2 className="text-3xl font-bold text-slate-900">What Information We Collect</h2>
            </div>
            <p className="mb-6 text-xl text-slate-600">We collect information necessary to provide UCBuddy's features, including:</p>
            <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-white p-4.5">
                <p className="mb-2 text-lg font-semibold text-slate-900">Google Account</p>
                <ul className="space-y-1.5">
                  <li className="flex items-baseline gap-2 text-lg text-slate-600">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-indigo-600"></span>
                    Full name
                  </li>
                  <li className="flex items-baseline gap-2 text-lg text-slate-600">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-indigo-600"></span>
                    Email address
                  </li>
                  <li className="flex items-baseline gap-2 text-lg text-slate-600">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-indigo-600"></span>
                    Profile picture
                  </li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-4.5">
                <p className="mb-2 text-lg font-semibold text-slate-900">CV Content</p>
                <ul className="space-y-1.5">
                  <li className="flex items-baseline gap-2 text-lg text-slate-600">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-indigo-600"></span>
                    Education
                  </li>
                  <li className="flex items-baseline gap-2 text-lg text-slate-600">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-indigo-600"></span>
                    Work experience
                  </li>
                  <li className="flex items-baseline gap-2 text-lg text-slate-600">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-indigo-600"></span>
                    Skills & projects
                  </li>
                  <li className="flex items-baseline gap-2 text-lg text-slate-600">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-indigo-600"></span>
                    Career objectives
                  </li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-4.5">
                <p className="mb-2 text-lg font-semibold text-slate-900">AI Chat Data</p>
                <ul className="space-y-1.5">
                  <li className="flex items-baseline gap-2 text-lg text-slate-600">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-indigo-600"></span>
                    Messages and prompts submitted to AI
                  </li>
                  <li className="flex items-baseline gap-2 text-lg text-slate-600">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-indigo-600"></span>
                    AI-generated responses
                  </li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-4.5">
                <p className="mb-2 text-lg font-semibold text-slate-900">Usage & Analytics</p>
                <ul className="space-y-1.5">
                  <li className="flex items-baseline gap-2 text-lg text-slate-600">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-indigo-600"></span>
                    App version
                  </li>
                  <li className="flex items-baseline gap-2 text-lg text-slate-600">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-indigo-600"></span>
                    Device type & OS
                  </li>
                  <li className="flex items-baseline gap-2 text-lg text-slate-600">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-indigo-600"></span>
                    Usage events
                  </li>
                  <li className="flex items-baseline gap-2 text-lg text-slate-600">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-indigo-600"></span>
                    Crash reports
                  </li>
                </ul>
              </div>
            </div>
            <p className="mt-4 text-xl text-slate-600">
              We may also collect avatar photos and other images you upload for use in your resumes
              and profiles.
            </p>
          </section>

          {/* 3. USE */}
          <section id="use" className="mb-11">
            <div className="mb-3.5 flex items-center gap-2.5 border-b border-slate-200 pb-3">
              <span className="rounded border border-indigo-200 bg-indigo-50 px-2 py-0.5 text-sm font-medium text-indigo-600">
                03
              </span>
              <h2 className="text-3xl font-bold text-slate-900">How We Use Your Information</h2>
            </div>
            <p className="mb-6 text-xl text-slate-600">We use your information to provide, maintain, and improve UCBuddy services:</p>
            <ul className="mt-3.5 space-y-2">
              <li className="flex items-baseline gap-2.5 border-b border-slate-200 py-2.5 text-xl text-slate-600">
                <span className="shrink-0 text-lg text-indigo-600">→</span>
                Create and manage your account
              </li>
              <li className="flex items-baseline gap-2.5 border-b border-slate-200 py-2.5 text-xl text-slate-600">
                <span className="shrink-0 text-lg text-indigo-600">→</span>
                Generate and optimize CV content
              </li>
              <li className="flex items-baseline gap-2.5 border-b border-slate-200 py-2.5 text-xl text-slate-600">
                <span className="shrink-0 text-lg text-indigo-600">→</span>
                Provide AI-powered career assistance
              </li>
              <li className="flex items-baseline gap-2.5 border-b border-slate-200 py-2.5 text-xl text-slate-600">
                <span className="shrink-0 text-lg text-indigo-600">→</span>
                Match resumes with job descriptions
              </li>
              <li className="flex items-baseline gap-2.5 border-b border-slate-200 py-2.5 text-xl text-slate-600">
                <span className="shrink-0 text-lg text-indigo-600">→</span>
                Generate and export professional PDF resumes
              </li>
              <li className="flex items-baseline gap-2.5 border-b border-slate-200 py-2.5 text-xl text-slate-600">
                <span className="shrink-0 text-lg text-indigo-600">→</span>
                Improve application performance and diagnose issues
              </li>
              <li className="flex items-baseline gap-2.5 border-b border-slate-200 py-2.5 text-xl text-slate-600">
                <span className="shrink-0 text-lg text-indigo-600">→</span>
                Analyze product usage and enhance user experience
              </li>
              <li className="flex items-baseline gap-2.5 py-2.5 text-xl text-slate-600">
                <span className="shrink-0 text-lg text-indigo-600">→</span>
                Maintain security and reliability of our services
              </li>
            </ul>
          </section>

          {/* 4. THIRD PARTY  */}
          <section id="third-party" className="mb-11">
            <div className="mb-3.5 flex items-center gap-2.5 border-b border-slate-200 pb-3">
              <span className="rounded border border-indigo-200 bg-indigo-50 px-2 py-0.5 text-sm font-medium text-indigo-600">
                04
              </span>
              <h2 className="text-3xl font-bold text-slate-900">Third-Party Services</h2>
            </div>
            <p className="mb-6 text-xl text-slate-600">
              UCBuddy integrates with the following third-party services to deliver its features:
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <span className="rounded border border-slate-300 bg-slate-100 px-3 py-1.5 text-lg font-medium text-slate-900">
                Google Sign-In
              </span>
              <span className="rounded border border-slate-300 bg-slate-100 px-3 py-1.5 text-lg font-medium text-slate-900">
                Firebase Analytics
              </span>
              <span className="rounded border border-slate-300 bg-slate-100 px-3 py-1.5 text-lg font-medium text-slate-900">
                Firebase Crashlytics
              </span>
              <span className="rounded border border-slate-300 bg-slate-100 px-3 py-1.5 text-lg font-medium text-slate-900">
                Firebase Cloud Storage
              </span>
              <span className="rounded border border-slate-300 bg-slate-100 px-3 py-1.5 text-lg font-medium text-slate-900">
                Google Gemini API
              </span>
            </div>
          </section>

          {/* 5. AI */}
          <section id="ai" className="mb-11">
            <div className="mb-3.5 flex items-center gap-2.5 border-b border-slate-200 pb-3">
              <span className="rounded border border-indigo-200 bg-indigo-50 px-2 py-0.5 text-sm font-medium text-indigo-600">
                05
              </span>
              <h2 className="text-3xl font-bold text-slate-900">AI Processing</h2>
            </div>
            <p className="mb-6 text-xl text-slate-600">
              To provide AI-powered features, certain CV content, resume information, and user
              prompts may be transmitted to third-party AI service providers for processing and
              response generation.
            </p>
            <div className="mt-5 rounded-lg border border-indigo-200 bg-indigo-50 p-5 text-xl leading-8 text-indigo-900">
              Information sent to AI providers is processed solely for generating responses and delivering requested AI-powered features.
            </div>
          </section>

          {/* 6. SHARING */}
          <section id="sharing" className="mb-11">
            <div className="mb-3.5 flex items-center gap-2.5 border-b border-slate-200 pb-3">
              <span className="rounded border border-indigo-200 bg-indigo-50 px-2 py-0.5 text-sm font-medium text-indigo-600">
                06
              </span>
              <h2 className="text-3xl font-bold text-slate-900">Data Sharing</h2>
            </div>
            <p className="mb-4 text-lg text-slate-600">
              <strong>We do not sell personal information.</strong>
            </p>
            <p className="text-lg text-slate-600">
              Information may be shared with third-party service providers that support
              authentication, cloud storage, analytics, crash reporting, and AI-powered features.
              These providers are only permitted to process information as necessary to deliver
              their services to UCBuddy.
            </p>
          </section>

          {/* 7. RETENTION */}
          <section id="retention" className="mb-11">
            <div className="mb-3.5 flex items-center gap-2.5 border-b border-slate-200 pb-3">
              <span className="rounded border border-indigo-200 bg-indigo-50 px-2 py-0.5 text-sm font-medium text-indigo-600">
                07
              </span>
              <h2 className="text-3xl font-bold text-slate-900">Data Retention</h2>
            </div>
            <p className="mb-4 text-lg text-slate-600">
              We retain user information for as long as necessary to provide UCBuddy services,
              including account management, CV generation, AI assistance, and resume storage.
            </p>
            <p className="text-lg text-slate-600">
              Certain information may be retained where required by law or for security, fraud
              prevention, and troubleshooting purposes.
            </p>
          </section>

          {/* 8. RIGHTS */}
          <section id="rights" className="mb-11">
            <div className="mb-3.5 flex items-center gap-2.5 border-b border-slate-200 pb-3">
              <span className="rounded border border-indigo-200 bg-indigo-50 px-2 py-0.5 text-sm font-medium text-indigo-600">
                08
              </span>
              <h2 className="text-3xl font-bold text-slate-900">User Rights & Account Deletion</h2>
            </div>
            <p className="mb-4 text-lg text-slate-600">
              You have the right to access, correct, or delete your personal information, and to
              withdraw consent at any time.
            </p>
            <p className="text-lg text-slate-600">
              To request deletion of your account and associated data, contact us at{" "}
              <a href="mailto:support@uctalent.io" className="font-medium text-indigo-600 hover:text-indigo-700">
                support@uctalent.io
              </a>
              . Upon receiving a verified request, we will delete or anonymize your information
              unless retention is required by law, security obligations, or legitimate business
              purposes.
            </p>
          </section>

          {/* 9. SECURITY */}
          <section id="security" className="mb-11">
            <div className="mb-3.5 flex items-center gap-2.5 border-b border-slate-200 pb-3">
              <span className="rounded border border-indigo-200 bg-indigo-50 px-2 py-0.5 text-sm font-medium text-indigo-600">
                09
              </span>
              <h2 className="text-3xl font-bold text-slate-900">Security</h2>
            </div>
            <p className="mb-4 text-lg text-slate-600">
              We implement reasonable technical and organizational measures to protect user
              information against unauthorized access, disclosure, or loss.
            </p>
            <p className="text-lg text-slate-600">
              While we strive to protect your information, no method of electronic transmission or
              storage is completely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          {/* 10. CHILDREN */}
          <section id="children" className="mb-11">
            <div className="mb-3.5 flex items-center gap-2.5 border-b border-slate-200 pb-3">
              <span className="rounded border border-indigo-200 bg-indigo-50 px-2 py-0.5 text-sm font-medium text-indigo-600">
                10
              </span>
              <h2 className="text-3xl font-bold text-slate-900">Children's Privacy</h2>
            </div>
            <p className="text-lg text-slate-600">
              UCBuddy is not intended for children under the age of 13. We do not knowingly collect
              personal information from children. If we become aware that such information has been
              collected, we will take reasonable steps to delete it.
            </p>
          </section>

          {/* 11. PERMISSIONS */}
          <section id="permissions" className="mb-11">
            <div className="mb-3.5 flex items-center gap-2.5 border-b border-slate-200 pb-3">
              <span className="rounded border border-indigo-200 bg-indigo-50 px-2 py-0.5 text-sm font-medium text-indigo-600">
                11
              </span>
              <h2 className="text-3xl font-bold text-slate-900">App Permissions</h2>
            </div>
            <p className="mb-4 text-xl text-slate-600">UCBuddy requests the following device permissions:</p>
            <div className="mt-5 overflow-hidden rounded-lg border border-slate-200">
              <div className="grid grid-cols-1 divide-y border-b border-slate-200 md:grid-cols-[180px_1fr] md:divide-y-0">
                <span className="border-slate-200 bg-indigo-50 px-4 py-3.5 text-lg font-semibold text-indigo-600 md:border-r">
                  RECORD_AUDIO
                </span>
                <span className="px-4 py-3.5 text-lg text-slate-600">
                  Supports voice-to-text within the AI chat feature. Audio is only recorded when the
                  user explicitly initiates voice input.
                </span>
              </div>
              <div className="grid grid-cols-1 divide-y border-b border-slate-200 md:grid-cols-[180px_1fr] md:divide-y-0">
                <span className="border-slate-200 bg-indigo-50 px-4 py-3.5 text-lg font-semibold text-indigo-600 md:border-r">
                  READ_MEDIA_
                  IMAGES
                </span>
                <span className="px-4 py-3.5 text-lg text-slate-600">
                  Allows users to select profile photos and images from their device gallery for use
                  in resumes and profiles.
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-[180px_1fr]">
                <span className="border-slate-200 bg-indigo-50 px-4 py-3.5 text-lg font-semibold text-indigo-600 md:border-r">
                  INTERNET
                </span>
                <span className="px-4 py-3.5 text-lg text-slate-600">
                  Required to access AI services, synchronize user data, retrieve templates, and
                  support analytics and crash reporting.
                </span>
              </div>
            </div>
          </section>

          {/* 12. CONTACT */}
          <section id="contact" className="mb-11">
            <div className="mb-3.5 flex items-center gap-2.5 border-b border-slate-200 pb-3">
              <span className="rounded border border-indigo-200 bg-indigo-50 px-2 py-0.5 text-base font-medium text-indigo-600">
                12
              </span>
              <h2 className="text-3xl font-bold text-slate-900">Contact Information</h2>
            </div>
            <p className="mb-6 text-xl text-slate-600">
              If you have questions about this Privacy Policy or wish to exercise your privacy
              rights, please reach out:
            </p>
            <div className="mt-5 flex items-center gap-3.5 rounded-lg border border-slate-200 bg-white p-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-indigo-200 bg-indigo-50">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 stroke-indigo-600"
                  fill="none"
                  strokeWidth="1.8"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <p className="mb-0.5 text-base text-slate-500">Email us at</p>
                <a href="mailto:support@uctalent.io" className="text-lg font-medium text-indigo-600 hover:text-indigo-700">
                  support@uctalent.io
                </a>
              </div>
            </div>
          </section>

          {/* 13. CHANGES */}
          <section id="changes" className="mb-11">
            <div className="mb-3.5 flex items-center gap-2.5 border-b border-slate-200 pb-3">
              <span className="rounded border border-indigo-200 bg-indigo-50 px-2 py-0.5 text-base font-medium text-indigo-600">
                13
              </span>
              <h2 className="text-3xl font-bold text-slate-900">Changes to This Policy</h2>
            </div>
            <p className="text-lg text-slate-600">
              We may update this Privacy Policy from time to time. Any changes will be posted on
              this page with an updated Effective Date. Continued use of UCBuddy after changes
              become effective constitutes acceptance of the revised Privacy Policy.
            </p>
          </section>

          <footer className="mt-12 flex flex-col items-center justify-between gap-1.5 border-t border-slate-200 pt-6 text-base text-slate-500 md:flex-row md:gap-0">
            <span>© 2026 UCBuddy · uctalent.io</span>
            <span>Effective Date: May 21, 2026</span>
          </footer>
        </main>
      </div>
    </div>
  );
}