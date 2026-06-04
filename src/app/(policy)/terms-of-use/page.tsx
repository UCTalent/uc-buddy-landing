"use client";

// import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import { useLegalScrollSpy } from "@/components/legal/legal-scroll-spy";
import { LEGAL_STYLES } from '@/components/legal/legal-styles';

export default function TermsOfUsePage() {
const { scrollToSection } = useLegalScrollSpy();

  const navItems = [
    { id: "acceptance-of-terms", label: "Acceptance of Terms" },
    { id: "services", label: "Description of Services" },
    { id: "user-accounts", label: "User Accounts" },
    { id: "user-content", label: "User Content" },
    { id: "ai-disclaimer", label: "AI Features Disclaimer" },
    { id: "job-disclaimer", label: "Job Matching Disclaimer" },
    { id: "acceptable-use", label: "Acceptable Use" },
    { id: "ai-limits", label: "AI Usage Limits" },
    { id: "intellectual", label: "Intellectual Property" },
    { id: "feedback", label: "User Feedback" },
    { id: "third-party", label: "Third-Party Services" },
    { id: "availability", label: "Service Availability" },
    { id: "warranties", label: "Disclaimer of Warranties" },
    { id: "liability", label: "Limitation of Liability" },
    { id: "indemnification", label: "Indemnification" },
    { id: "termination", label: "Termination" },
    { id: "privacy", label: "Privacy" },
    { id: "law", label: "Governing Law" },
    { id: "changes", label: "Changes to Terms" },
    { id: "contact", label: "Contact Information" },
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <style>{LEGAL_STYLES}</style>

      {/* HEADER */}
      <header className="sticky top-0 z-10 border-b bg-white" style={{ borderColor: 'var(--border)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px', height: '60px', display: 'flex', alignItems: 'center' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <Image
              src="/images/ucbuddy-logo.png"
              alt="UCBuddy Logo"
              width={32}
              height={32}
              style={{ borderRadius: '6px' }}
              priority
            />
            <span style={{ fontFamily: 'var(--sans)', fontWeight: 600, fontSize: '16px', color: 'var(--ink)', letterSpacing: '-0.01em' }}>UCBuddy</span>
          </Link>
          <span style={{ marginLeft: '16px', fontFamily: 'var(--sans)', fontSize: '13px', color: 'var(--ink-faint)', paddingLeft: '16px', borderLeft: '1px solid var(--border)' }}>Terms of Use</span>
        </div>
      </header>

      {/* PAGE LAYOUT */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: '1fr', gap: '0' }} className="lg:grid-cols-page">
        <style>{`
          @media (min-width: 1024px) {
            .lg\\:grid-cols-page { grid-template-columns: 200px 1fr !important; gap: 64px !important; }
          }
        `}</style>

        {/* SIDEBAR */}
        <aside style={{ display: 'none' }} className="lg-sidebar">
          <style>{`
            @media (min-width: 1024px) {
              .lg-sidebar { display: block !important; padding-top: 56px; }
              .lg-sidebar-inner { position: sticky; top: 84px; }
            }
          `}</style>
          <div className="lg-sidebar-inner">
            <p style={{ fontFamily: 'var(--sans)', fontSize: '10px', fontWeight: 600, letterSpacing: '0.08em', color: 'var(--ink-faint)', textTransform: 'uppercase', marginBottom: '12px', paddingLeft: '12px' }}>Contents</p>
            <nav style={{ display: 'flex', flexDirection: 'column' }}>
              {navItems.map((item) => (
                <a
                  key={item.id}
                  data-href={`#${item.id}`}
                  href={`#${item.id}`}
                  onClick={scrollToSection(item.id)}
                  className="nav-link"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main style={{ paddingTop: '48px', paddingBottom: '80px' }}>
          {/* Page Header */}
          <div style={{ marginBottom: '48px', paddingBottom: '32px', borderBottom: '1px solid var(--border)' }}>
            <p style={{ fontFamily: 'var(--sans)', fontSize: '12px', fontWeight: 500, letterSpacing: '0.06em', color: 'var(--ink-faint)', textTransform: 'uppercase', marginBottom: '12px' }}>Legal Document</p>
            <h1 className="pp-serif" style={{ fontSize: '2rem', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: '16px', lineHeight: 1.2 }}>UCBuddy Terms of Use</h1>
            {/* <p className="body-text" style={{ marginBottom: '10px' }}>Effective Date: June 2, 2026</p>
            <p className="body-text" style={{ marginBottom: '10px' }}>Owner: UCTalent Labs Co., Ltd.</p> */}
            {/* <p className="body-text">
              Welcome to UCBuddy. By accessing or using our mobile application, you agree to be bound by these Terms of Use. If you do not agree, please do not use the service.
            </p> */}
          </div>

          {/* 01 Acceptance of Terms */}
          <section id="acceptance-of-terms" style={{ marginBottom: '44px' }}>
            <div className="section-divider">
              <span className="section-num">01</span>
              <h2 className="section-heading">Acceptance of Terms</h2>
            </div>
            <p className="body-text" style={{ marginBottom: '10px' }}>Welcome to UCBuddy.</p>
            <p className="body-text" style={{ marginBottom: '10px' }}>These Terms of Use govern your access to and use of the UCBuddy mobile application, website, and related services.</p>
            <p className="body-text" style={{ marginBottom: '10px' }}>By creating an account, accessing, or using the Services, you agree to be bound by these Terms. If you do not agree, you must not use the Services.</p>
            <p className="body-text">You must be at least 16 years old or the minimum age required under applicable law to use the Services.</p>
          </section>

          {/* 02 Description of Services */}
          <section id="services" style={{ marginBottom: '44px' }}>
            <div className="section-divider">
              <span className="section-num">02</span>
              <h2 className="section-heading">Description of Services</h2>
            </div>
            <p className="body-text" style={{ marginBottom: '10px' }}>UCBuddy provides AI-powered career assistance tools, including but not limited to:</p>
            <ul className="pp-list" style={{ marginBottom: '12px' }}>
              <li>Resume and CV creation</li>
              <li>Resume optimization</li>
              <li>AI career guidance</li>
              <li>Job matching recommendations</li>
              <li>Resume scoring and analysis</li>
              <li>Voice-to-text resume creation</li>
              <li>PDF resume export</li>
              <li>Career-related content generation</li>
            </ul>
            <p className="body-text">UCBuddy may modify, replace, suspend, limit, update, or discontinue any feature, functionality, or portion of the Services from time to time. Additional terms regarding service availability and modifications are described in these Terms.</p>
          </section>

          {/* 03 User Accounts */}
          <section id="user-accounts" style={{ marginBottom: '44px' }}>
            <div className="section-divider">
              <span className="section-num">03</span>
              <h2 className="section-heading">User Accounts</h2>
            </div>
            <p className="body-text" style={{ marginBottom: '10px' }}>To access certain features, users may be required to create an account.</p>
            <p className="body-text" style={{ marginBottom: '10px' }}>You agree to:</p>
            <ul className="pp-list" style={{ marginBottom: '12px' }}>
              <li>Provide accurate information</li>
              <li>Maintain the security of your account</li>
              <li>Keep login credentials confidential</li>
              <li>Notify us of unauthorized access</li>
            </ul>
            <p className="body-text">You are responsible for all activities that occur under your account.</p>
          </section>

          {/* 04 User Content */}
          <section id="user-content" style={{ marginBottom: '44px' }}>
            <div className="section-divider">
              <span className="section-num">04</span>
              <h2 className="section-heading">User Content</h2>
            </div>
            <p className="body-text" style={{ marginBottom: '10px' }}>Users may upload, submit, create, or store content through the Services, including:</p>
            <ul className="pp-list" style={{ marginBottom: '12px' }}>
              <li>Resume information</li>
              <li>Work experience</li>
              <li>Education details</li>
              <li>Images</li>
              <li>Documents</li>
              <li>Messages submitted to AI features</li>
            </ul>
            <p className="body-text" style={{ marginBottom: '10px' }}>You retain ownership of your content.</p>
            <p className="body-text">However, you grant UCBuddy a limited license to process, store, transmit, and display such content solely for providing the Services.</p>
          </section>

          {/* 05 AI Features Disclaimer */}
          <section id="ai-disclaimer" style={{ marginBottom: '44px' }}>
            <div className="section-divider">
              <span className="section-num">05</span>
              <h2 className="section-heading">AI Features Disclaimer</h2>
            </div>
            <p className="body-text" style={{ marginBottom: '10px' }}>UCBuddy uses Artificial Intelligence ("AI") technologies to assist users with resume creation, resume optimization, career guidance, job matching recommendations, resume scoring, content enhancement, and related career-support features.</p>
            <p className="body-text" style={{ marginBottom: '10px' }}>AI-generated outputs may include:</p>
            <ul className="pp-list" style={{ marginBottom: '12px' }}>
              <li>Resume suggestions</li>
              <li>Career recommendations</li>
              <li>Job matching results</li>
              <li>Resume scores</li>
              <li>Content improvements</li>
              <li>Cover letter suggestions</li>
              <li>Other AI-generated career-related content</li>
            </ul>
            <p className="body-text" style={{ marginBottom: '10px' }}>AI-generated content may be inaccurate, incomplete, outdated, misleading, or unsuitable for a particular situation.</p>
            <p className="body-text" style={{ marginBottom: '10px' }}>Users are solely responsible for reviewing, editing, verifying, and evaluating all information contained in resumes, cover letters, career recommendations, job matching suggestions, scores, and other AI-generated outputs before using, publishing, sharing, submitting, or relying on such content.</p>
            <p className="body-text" style={{ marginBottom: '10px' }}>UCBuddy does not verify the factual accuracy of information generated by AI systems and does not guarantee the accuracy, completeness, reliability, or suitability of any AI-generated output.</p>
            <p className="body-text" style={{ marginBottom: '10px' }}>AI outputs are provided solely for informational and assistive purposes and should not be considered professional advice or relied upon as the sole basis for decision-making.</p>
            <p className="body-text" style={{ marginBottom: '10px' }}>AI-generated outputs do not constitute:</p>
            <ul className="pp-list" style={{ marginBottom: '12px' }}>
              <li>Professional career advice</li>
              <li>Employment advice</li>
              <li>Recruitment decisions</li>
              <li>Legal advice</li>
              <li>Financial advice</li>
              <li>Educational advice</li>
              <li>Human resources advice</li>
              <li>Professional consulting services</li>
            </ul>
            <p className="body-text" style={{ marginBottom: '10px' }}>Users remain solely responsible for all decisions, actions, submissions, and representations made using AI-generated content.</p>
            <p className="body-text">UCBuddy does not warrant that AI-generated outputs will be accurate, complete, error-free, current, or suitable for any particular purpose.</p>
          </section>

          {/* 06 Job Matching Disclaimer */}
          <section id="job-disclaimer" style={{ marginBottom: '44px' }}>
            <div className="section-divider">
              <span className="section-num">06</span>
              <h2 className="section-heading">Job Matching Disclaimer</h2>
            </div>
            <p className="body-text" style={{ marginBottom: '10px' }}>UCBuddy may provide job recommendations, compatibility scores, resume assessments, career suggestions, and other employment-related insights.</p>
            <p className="body-text" style={{ marginBottom: '10px' }}>These features are intended to support users in improving their career readiness and job application materials.</p>
            <p className="body-text" style={{ marginBottom: '10px' }}>UCBuddy does not:</p>
            <ul className="pp-list" style={{ marginBottom: '12px' }}>
              <li>Guarantee employment</li>
              <li>Guarantee interviews</li>
              <li>Guarantee job offers</li>
              <li>Guarantee career advancement</li>
              <li>Guarantee any specific professional outcome</li>
              <li>Act as a recruitment agency unless explicitly stated</li>
            </ul>
            <p className="body-text" style={{ marginBottom: '10px' }}>Any hiring, recruitment, admission, or employment decision is made solely by employers, recruiters, educational institutions, or other third parties.</p>
            <p className="body-text" style={{ marginBottom: '10px' }}>UCBuddy does not participate in, control, or influence hiring decisions made by employers or recruitment partners.</p>
            <p className="body-text">AI-generated recommendations, compatibility scores, and job matching suggestions are intended to support human decision-making and should not be relied upon as the sole basis for employment, recruitment, educational, or career decisions.</p>
          </section>

          {/* 07 Acceptable Use */}
          <section id="acceptable-use" style={{ marginBottom: '44px' }}>
            <div className="section-divider">
              <span className="section-num">07</span>
              <h2 className="section-heading">Acceptable Use</h2>
            </div>
            <p className="body-text" style={{ marginBottom: '10px' }}>You agree not to:</p>
            <ul className="pp-list" style={{ marginBottom: '12px' }}>
              <li>Use the Services for unlawful purposes</li>
              <li>Upload malicious software</li>
              <li>Attempt to gain unauthorized access</li>
              <li>Reverse engineer the Services</li>
              <li>Abuse AI systems</li>
              <li>Generate harmful, fraudulent, misleading, or illegal content</li>
              <li>Interfere with the operation of the Services</li>
              <li>Impersonate another person or entity</li>
              <li>Violate intellectual property rights</li>
              <li>Upload content that infringes third-party rights</li>
            </ul>
            <p className="body-text">We reserve the right to suspend or terminate accounts that violate these Terms.</p>
          </section>

          {/* 08 AI Usage Limits */}
          <section id="ai-limits" style={{ marginBottom: '44px' }}>
            <div className="section-divider">
              <span className="section-num">08</span>
              <h2 className="section-heading">AI Usage Limits</h2>
            </div>
            <p className="body-text" style={{ marginBottom: '10px' }}>To maintain service quality, platform stability, and fair access for all users, UCBuddy may impose reasonable usage limits on AI-powered features, including daily, monthly, per-session, or feature-specific generation limits.</p>
            <p className="body-text" style={{ marginBottom: '10px' }}>Users may not use automated tools, bots, scripts, crawlers, or similar technologies to access, exploit, overload, or interfere with AI-powered features.</p>
            <p className="body-text">Excessive automated activity, abuse of AI systems, attempts to circumvent usage limits, or activities that generate disproportionate platform costs may result in temporary restrictions, throttling, suspension, or termination of access to the Services.</p>
          </section>

          {/* 09 Intellectual Property */}
          <section id="intellectual" style={{ marginBottom: '44px' }}>
            <div className="section-divider">
              <span className="section-num">09</span>
              <h2 className="section-heading">Intellectual Property</h2>
            </div>
            <p className="body-text" style={{ marginBottom: '10px' }}>The Services, including:</p>
            <ul className="pp-list" style={{ marginBottom: '12px' }}>
              <li>Software</li>
              <li>Design</li>
              <li>Logos</li>
              <li>Branding</li>
              <li>Templates</li>
              <li>AI workflows</li>
            </ul>
            <p className="body-text" style={{ marginBottom: '10px' }}>are owned by UCTalent Labs Co., Ltd. or its licensors and are protected by applicable intellectual property laws.</p>
            <p className="body-text">These Terms do not grant ownership rights to users.</p>
          </section>

          {/* 10 User Feedback */}
          <section id="feedback" style={{ marginBottom: '44px' }}>
            <div className="section-divider">
              <span className="section-num">10</span>
              <h2 className="section-heading">User Feedback</h2>
            </div>
            <p className="body-text">If you provide suggestions, ideas, feedback, feature requests, bug reports, or other comments regarding the Services, you grant UCTalent Labs Co., Ltd. a worldwide, non-exclusive, royalty-free, perpetual right to use, modify, implement, and incorporate such feedback without compensation or obligation to you.</p>
          </section>

          {/* 11 Third-Party Services */}
          <section id="third-party" style={{ marginBottom: '44px' }}>
            <div className="section-divider">
              <span className="section-num">11</span>
              <h2 className="section-heading">Third-Party Services</h2>
            </div>
            <p className="body-text" style={{ marginBottom: '10px' }}>The Services may integrate with third-party providers, including:</p>
            <ul className="pp-list" style={{ marginBottom: '12px' }}>
              <li>Google services</li>
              <li>Firebase services</li>
              <li>Supabase</li>
              <li>Google Gemini API</li>
            </ul>
            <p className="body-text">Your use of third-party services may also be governed by their respective terms and policies.</p>
          </section>

          {/* 12 Service Availability */}
          <section id="availability" style={{ marginBottom: '44px' }}>
            <div className="section-divider">
              <span className="section-num">12</span>
              <h2 className="section-heading">Service Availability</h2>
            </div>
            <p className="body-text" style={{ marginBottom: '10px' }}>We strive to maintain reliable Services but do not guarantee that:</p>
            <ul className="pp-list" style={{ marginBottom: '12px' }}>
              <li>Services will always be available</li>
              <li>Services will be uninterrupted</li>
              <li>Services will be error-free</li>
            </ul>
            <p className="body-text">Features may be modified, suspended, or discontinued at any time.</p>
          </section>

          {/* 13 Disclaimer of Warranties */}
          <section id="warranties" style={{ marginBottom: '44px' }}>
            <div className="section-divider">
              <span className="section-num">13</span>
              <h2 className="section-heading">Disclaimer of Warranties</h2>
            </div>
            <p className="body-text" style={{ marginBottom: '10px' }}>The Services are provided on an "AS IS" and "AS AVAILABLE" basis.</p>
            <p className="body-text" style={{ marginBottom: '10px' }}>To the maximum extent permitted by law, UCBuddy disclaims all warranties, whether express or implied, including warranties of:</p>
            <ul className="pp-list">
              <li>Merchantability</li>
              <li>Fitness for a particular purpose</li>
              <li>Non-infringement</li>
              <li>Accuracy of AI-generated outputs</li>
            </ul>
          </section>

          {/* 14 Limitation of Liability */}
          <section id="liability" style={{ marginBottom: '44px' }}>
            <div className="section-divider">
              <span className="section-num">14</span>
              <h2 className="section-heading">Limitation of Liability</h2>
            </div>
            <p className="body-text" style={{ marginBottom: '10px' }}>To the maximum extent permitted by law:</p>
            <p className="body-text" style={{ marginBottom: '10px' }}>UCBuddy, UCTalent Labs Co., Ltd., its directors, employees, affiliates, and partners shall not be liable for:</p>
            <ul className="pp-list" style={{ marginBottom: '12px' }}>
              <li>Loss of employment opportunities</li>
              <li>Loss of profits</li>
              <li>Loss of business opportunities</li>
              <li>Hiring decisions</li>
              <li>Career outcomes</li>
              <li>Loss of data</li>
              <li>Business interruption</li>
              <li>Indirect or consequential damages</li>
            </ul>
            <p className="body-text" style={{ marginBottom: '10px' }}>arising from the use of the Services.</p>
            <p className="body-text">Your use of the Services is at your own risk.</p>
          </section>

          {/* 15 Indemnification */}
          <section id="indemnification" style={{ marginBottom: '44px' }}>
            <div className="section-divider">
              <span className="section-num">15</span>
              <h2 className="section-heading">Indemnification</h2>
            </div>
            <p className="body-text" style={{ marginBottom: '10px' }}>You agree to defend, indemnify, and hold harmless UCBuddy, UCTalent Labs Co., Ltd., its affiliates, employees, officers, directors, and partners from and against any claims, damages, liabilities, costs, or expenses arising from:</p>
            <ul className="pp-list">
              <li>Your use of the Services</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any applicable law</li>
              <li>Content submitted, uploaded, created, stored, shared, or generated through your account</li>
            </ul>
          </section>

          {/* 16 Termination */}
          <section id="termination" style={{ marginBottom: '44px' }}>
            <div className="section-divider">
              <span className="section-num">16</span>
              <h2 className="section-heading">Termination</h2>
            </div>
            <p className="body-text" style={{ marginBottom: '10px' }}>We may suspend or terminate access to the Services if:</p>
            <ul className="pp-list" style={{ marginBottom: '12px' }}>
              <li>These Terms are violated</li>
              <li>Fraudulent activity is detected</li>
              <li>Legal requirements require suspension</li>
              <li>Service abuse occurs</li>
            </ul>
            <p className="body-text">Users may stop using the Services or delete their accounts at any time.</p>
          </section>

          {/* 17 Privacy */}
          <section id="privacy" style={{ marginBottom: '44px' }}>
            <div className="section-divider">
              <span className="section-num">17</span>
              <h2 className="section-heading">Privacy</h2>
            </div>
            <p className="body-text" style={{ marginBottom: '10px' }}>Our collection and processing of personal information are governed by our Privacy Policy.</p>
            <p className="body-text">By using the Services, you acknowledge that you have read the Privacy Policy.</p>
          </section>

          {/* 18 Governing Law */}
          <section id="law" style={{ marginBottom: '44px' }}>
            <div className="section-divider">
              <span className="section-num">18</span>
              <h2 className="section-heading">Governing Law</h2>
            </div>
            <p className="body-text">These Terms shall be governed by and interpreted under the laws of Vietnam, without regard to conflict of law principles.</p>
          </section>

          {/* 19 Changes to These Terms */}
          <section id="changes" style={{ marginBottom: '44px' }}>
            <div className="section-divider">
              <span className="section-num">19</span>
              <h2 className="section-heading">Changes to These Terms</h2>
            </div>
            <p className="body-text" style={{ marginBottom: '10px' }}>We may update these Terms from time to time.</p>
            <p className="body-text" style={{ marginBottom: '10px' }}>Updated versions will be posted with a revised Effective Date.</p>
            <p className="body-text">Continued use of the Services after changes become effective constitutes acceptance of the revised Terms.</p>
          </section>

          {/* 20 Contact Information */}
          <section id="contact" style={{ marginBottom: '44px' }}>
            <div className="section-divider">
              <span className="section-num">20</span>
              <h2 className="section-heading">Contact Information</h2>
            </div>
            <p className="body-text" style={{ marginBottom: '10px' }}>UCTalent Labs Co., Ltd.</p>
            <p className="body-text" style={{ marginBottom: '10px' }}>Da Nang, Vietnam</p>
            <p className="body-text">Email: support@uctalent.io</p>
          </section>

          {/* Footer */}
          <footer style={{ marginTop: '48px', paddingTop: '24px', borderTop: '1px solid var(--border)', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '8px' }}>
            <span style={{ fontFamily: 'var(--sans)', fontSize: '13px', color: 'var(--ink-faint)' }}>© 2026 UCBuddy · uctalent.io</span>
            <span style={{ fontFamily: 'var(--sans)', fontSize: '13px', color: 'var(--ink-faint)' }}>Effective Date: June 2, 2026</span>
          </footer>
        </main>
      </div>
    </div>
  );
}