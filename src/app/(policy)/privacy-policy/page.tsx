"use client";

// import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import { useLegalScrollSpy } from "@/components/legal/legal-scroll-spy";
import { LEGAL_STYLES } from '@/components/legal/legal-styles';

export default function PrivacyPolicyPage() {
  const { scrollToSection } = useLegalScrollSpy();

  const navItems = [
    { id: "intro", label: "Introduction" },
    { id: "legis", label: "Legal Basis for Processing" },
    { id: "ai-transparent", label: "AI Transparency Notice" },
    { id: "collect", label: "What We Collect" },
    { id: "use", label: "How We Use It" },
    { id: "third-party", label: "Third-Party Services" },
    { id: "international", label: "International Data Processing" },
    { id: "ai-processing", label: "AI Processing" },
    { id: "sharing", label: "Data Sharing" },
    { id: "retention", label: "Data Retention" },
    { id: "rights", label: "User Rights" },
    { id: "deletion", label: "Account Deletion" },
    { id: "security", label: "Security" },
    { id: "children", label: "Children's Privacy" },
    { id: "permissions", label: "Permissions Used" },
    { id: "contact", label: "Contact" },
    { id: "changes", label: "Changes" },
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
          <span style={{ marginLeft: '16px', fontFamily: 'var(--sans)', fontSize: '13px', color: 'var(--ink-faint)', paddingLeft: '16px', borderLeft: '1px solid var(--border)' }}>Privacy Policy</span>
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
            <h1 className="pp-serif" style={{ fontSize: '2rem', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: '16px', lineHeight: 1.2 }}>UCBuddy Privacy Policy</h1>
            <p className="body-text" style={{ marginBottom: '10px' }}>
              Welcome to UCBuddy. This Privacy Policy describes how we collect, use, store, and protect your information when you use our AI-powered CV builder and career assistant services.
            </p>
            <p className="body-text" style={{ marginBottom: '10px' }}>
              It applies to all UCBuddy products and features, including CV creation, resume optimization, AI career assistance, job matching, PDF export, and account management.
            </p>
            <p className="body-text">
              By accessing or using UCBuddy, you acknowledge that you have read and understood this Privacy Policy. If you have questions about how your information is handled, please contact us at{' '}
              <a href="mailto:support@uctalent.io" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 500 }}>support@uctalent.io</a>.
            </p>
          </div>

          {/* 01 Introduction */}
          <section id="intro" style={{ marginBottom: '44px' }}>
            <div className="section-divider">
              <span className="section-num">01</span>
              <h2 className="section-heading">Introduction</h2>
            </div>
            <p className="body-text" style={{ marginBottom: '12px' }}>
              UCBuddy is an AI-powered CV builder and career assistance platform that helps users create, improve, organize, and manage professional resumes. The platform leverages artificial intelligence to assist with resume generation, CV optimization, grammar improvement, career guidance, and professional PDF export.
            </p>
            <p className="body-text">
              UCBuddy is designed to support students, recent graduates, career changers, and professionals throughout the job application process by providing accessible tools that simplify resume creation and improve job readiness.
            </p>
          </section>

          {/* 02 Legal Basis */}
          <section id="legis" style={{ marginBottom: '44px' }}>
            <div className="section-divider">
              <span className="section-num">02</span>
              <h2 className="section-heading">Legal Basis for Processing</h2>
            </div>
            <p className="body-text" style={{ marginBottom: '20px' }}>UCBuddy processes personal information based on one or more of the following grounds, where applicable:</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
              {[
                { num: '01', title: 'User Consent', body: 'Explicitly provided by users when registering or using specific features.' },
                { num: '02', title: 'Performance of Services', body: 'Necessary to deliver the services requested by the user (e.g., CV building, AI chat, PDF export).' },
                { num: '03', title: 'Legal Obligations', body: 'To fulfill legal requirements under applicable laws and regulations.' },
                { num: '04', title: 'Legitimate Interests', body: 'For platform security, fraud prevention, and technical maintenance, where permitted by applicable law.' },
              ].map((card) => (
                <div key={card.num} className="basis-card">
                  <div className="basis-card-num">{card.num}</div>
                  <div className="basis-card-title">{card.title}</div>
                  <div className="basis-card-body">{card.body}</div>
                </div>
              ))}
            </div>
            <div className="callout">
              <strong>Your Privacy Rights:</strong> Where consent is the primary legal basis, users may withdraw their consent at any time through the application settings. Please note that withdrawing consent may limit or disable certain features of the Services.
            </div>
          </section>

          {/* 03 AI Transparency */}
          <section id="ai-transparent" style={{ marginBottom: '44px' }}>
            <div className="section-divider">
              <span className="section-num">03</span>
              <h2 className="section-heading">AI Transparency Notice</h2>
            </div>
            <p className="body-text" style={{ marginBottom: '12px' }}>
              UCBuddy features advanced tools powered by Artificial Intelligence ("AI"), including resume generation, resume optimization, career guidance, job matching, and AI chat. We are committed to transparency: you will always be notified via the application interface when interacting with AI features or viewing AI-generated content.
            </p>
            <p className="body-text">
              <strong style={{ color: 'var(--ink)', fontWeight: 500 }}>Important disclaimer:</strong> AI-generated outputs are provided solely as assistive suggestions and do not constitute professional, career, legal, financial, or employment advice. Users retain sole responsibility for reviewing, verifying, and evaluating all AI content before using or relying on it. For more detailed information on how we process AI data, please see the <strong style={{ color: 'var(--ink)', fontWeight: 500 }}>AI Processing & Automated Recommendations</strong> section below.
            </p>
          </section>

          {/* 04 What We Collect */}
          <section id="collect" style={{ marginBottom: '44px' }}>
            <div className="section-divider">
              <span className="section-num">04</span>
              <h2 className="section-heading">What Information We Collect</h2>
            </div>
            <p className="body-text" style={{ marginBottom: '20px' }}>We collect information necessary to provide UCBuddy's features, including:</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: '12px' }}>
              {[
                { title: 'Google Account', items: ['Full name', 'Email address', 'Profile picture'] },
                { title: 'CV Content', items: ['Education', 'Work experience', 'Skills & projects', 'Career objectives'] },
                { title: 'AI Chat Data', items: ['Messages sent to AI', 'AI-generated responses'] },
                { title: 'Usage & Analytics', items: ['App version', 'Device type & OS', 'Usage events', 'Crash reports'] },
              ].map((card) => (
                <div key={card.title} className="data-card">
                  <div className="data-card-title">{card.title}</div>
                  <ul className="pp-list">
                    {card.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="body-text" style={{ marginTop: '16px' }}>
              We may also collect avatar photos and other images you upload for use in your resumes and profiles. This information is used to improve application performance, monitor crashes, diagnose technical issues, and enhance the overall user experience.
            </p>
          </section>

          {/* 05 How We Use It */}
          <section id="use" style={{ marginBottom: '44px' }}>
            <div className="section-divider">
              <span className="section-num">05</span>
              <h2 className="section-heading">How We Use Your Information</h2>
            </div>
            <p className="body-text" style={{ marginBottom: '20px' }}>We use your information to provide, maintain, and improve UCBuddy services. Here's how your data is utilized:</p>
            <div className="data-card" style={{ padding: '0 20px' }}>
              {[
                { title: 'Account & Authentication', items: ['Create and manage your account'] },
                { title: 'Core CV & Resume Services', items: ['Generate and optimize CV content', 'Generate and export professional PDF resumes'] },
                { title: 'AI-Powered Assistance', items: ['Provide AI-powered career assistance and guidance', 'Match resumes with job descriptions', 'Analyze resume content to generate career recommendations, compatibility scores, and job matching suggestions'] },
                { title: 'Analytics & Improvement', items: ['Improve application performance and diagnose technical issues', 'Analyze product usage patterns and enhance user experience'] },
                { title: 'Security & Maintenance', items: ['Maintain security and reliability of our services'] },
              ].map((cat) => (
                <div key={cat.title} className="use-cat">
                  <div className="use-cat-title">{cat.title}</div>
                  <ul className="pp-list">
                    {cat.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="callout-neutral">
              <strong style={{ color: 'var(--ink)', fontWeight: 500 }}>Note:</strong> We only use your information for the purposes described above and as required by law. Your data is never used for purposes beyond what you've consented to or what is necessary to operate UCBuddy.
            </div>
          </section>

          {/* 06 Third-Party Services */}
          <section id="third-party" style={{ marginBottom: '44px' }}>
            <div className="section-divider">
              <span className="section-num">06</span>
              <h2 className="section-heading">Third-Party Services</h2>
            </div>
            <p className="body-text" style={{ marginBottom: '20px' }}>UCBuddy integrates with the following third-party services to deliver its features:</p>
            <div className="data-card" style={{ padding: '0 20px' }}>
              {[
                { name: 'Google Sign-In', desc: 'For secure user authentication and account management' },
                { name: 'Firebase Services', desc: 'For analytics, crash reporting, and application monitoring' },
                { name: 'Supabase', desc: 'For database, cloud storage, and backend infrastructure' },
                { name: 'Google Gemini API', desc: 'For AI-powered resume generation, optimization, and career assistance' },
              ].map((tp) => (
                <div key={tp.name} className="tp-item">
                  <div style={{ flexShrink: 0, marginTop: '2px' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--border-strong)', marginTop: '6px' }}></div>
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--sans)', fontSize: '14px', fontWeight: 500, color: 'var(--ink)', marginBottom: '3px' }}>{tp.name}</div>
                    <div style={{ fontFamily: 'var(--sans)', fontSize: '13.5px', color: 'var(--ink-muted)', lineHeight: 1.55 }}>{tp.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 07 International Data Processing */}
          <section id="international" style={{ marginBottom: '44px' }}>
            <div className="section-divider">
              <span className="section-num">07</span>
              <h2 className="section-heading">International Data Processing</h2>
            </div>
            <p className="body-text" style={{ marginBottom: '12px' }}>
              Certain third-party service providers used by UCBuddy, including cloud infrastructure, analytics, authentication, and AI service providers, may process or store information on servers located outside of Vietnam.
            </p>
            <p className="body-text" style={{ marginBottom: '12px' }}>
              As a result, personal information is transferred to, processed, and stored in jurisdictions that may provide different levels of data protection than those available under the laws of your country of residence.
            </p>
            <p className="body-text">
              UCBuddy takes reasonable measures to help ensure that international data transfers are conducted with appropriate safeguards designed to protect personal information and maintain a level of protection consistent with applicable privacy and data protection laws.
            </p>
          </section>

          {/* 08 AI Processing */}
          <section id="ai-processing" style={{ marginBottom: '44px' }}>
            <div className="section-divider">
              <span className="section-num">08</span>
              <h2 className="section-heading">AI Processing</h2>
            </div>
            {[
              "To provide AI-powered features, certain CV content, resume information, uploaded documents, and user prompts will be transmitted to third-party AI service providers for processing and response generation.",
              "AI technologies are used to assist with resume generation, resume optimization, career guidance, content recommendations, compatibility scoring, and job matching functionalities.",
              "Users are informed that recommendations, scores, suggestions, and other outputs generated through these features may be produced wholly or partially by artificial intelligence systems.",
              "AI-generated outputs are intended solely to support user decision-making and should not be considered final employment, recruitment, hiring, admission, legal, financial, or career decisions.",
              "While we strive to improve the quality and accuracy of AI-generated outputs, such outputs may contain inaccuracies, omissions, outdated information, or recommendations that may not be suitable for every individual situation. Users should independently review and verify AI-generated content before relying on it.",
              "UCBuddy maintains appropriate human oversight over the design, operation, and monitoring of its AI-powered services. AI-generated outputs are intended to support users and remain subject to human review and judgment.",
              "UCBuddy does not use AI systems to make fully autonomous employment, hiring, admission, legal, or financial decisions on behalf of users.",
              "Where AI-generated recommendations may relate to career opportunities or employment-related suggestions, such recommendations are intended to support human judgment and are not used as the sole basis for decision-making.",
            ].map((para, i) => (
              <p key={i} className="body-text" style={{ marginBottom: '12px' }}>{para}</p>
            ))}
          </section>

          {/* 09 Data Sharing */}
          <section id="sharing" style={{ marginBottom: '44px' }}>
            <div className="section-divider">
              <span className="section-num">09</span>
              <h2 className="section-heading">Data Sharing</h2>
            </div>
            <div className="callout" style={{ marginTop: 0, marginBottom: '20px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '15px', flexShrink: 0, marginTop: '1px' }}>✓</span>
              <span><strong>We do not sell personal information.</strong> UCBuddy does not sell, rent, trade, or otherwise disclose your personal information to third parties for their marketing or commercial purposes.</span>
            </div>
            <div className="data-card" style={{ padding: '0 20px' }}>
              {[
                { title: 'Third-Party Service Providers', body: 'Information may be shared with trusted third-party service providers that support authentication, cloud storage, analytics, crash reporting, and AI-powered features. These providers are contractually obligated to process information only as necessary to deliver their services to UCBuddy and must comply with applicable privacy and data protection laws.' },
                { title: 'Recruitment & Job Matching Programs', body: 'Where users choose to participate in job matching or career opportunity programs, and where required by applicable law or platform settings, we will request additional explicit consent before sharing relevant professional profile information with authorized recruitment personnel, hiring partners, headhunters, talent acquisition specialists, and members of the UCTalent Operations Team. Information shared for recruitment purposes is limited to what is necessary to facilitate job matching and career opportunities.' },
                { title: 'Legal Compliance & Obligations', body: 'All data sharing is performed in strict accordance with applicable privacy and data protection laws, regulations, and legal requirements. We may disclose information where required by law or where we have a legitimate legal basis to do so.' },
              ].map((cat) => (
                <div key={cat.title} className="share-cat">
                  <div className="share-cat-title">{cat.title}</div>
                  <div style={{ fontFamily: 'var(--sans)', fontSize: '14px', lineHeight: 1.65, color: 'var(--ink-muted)' }}>{cat.body}</div>
                </div>
              ))}
            </div>
            <div className="callout" style={{ marginTop: '16px' }}>
              You have the right to control how your information is shared. You can manage your consent preferences and data sharing settings at any time through your account settings or by contacting us directly.
            </div>
          </section>

          {/* 10 Data Retention */}
          <section id="retention" style={{ marginBottom: '44px' }}>
            <div className="section-divider">
              <span className="section-num">10</span>
              <h2 className="section-heading">Data Retention</h2>
            </div>
            <p className="body-text" style={{ marginBottom: '12px' }}>
              We retain user information for as long as necessary to provide UCBuddy services, including account management, CV generation, AI assistance, and resume storage.
            </p>
            <p className="body-text">
              Certain information may be retained where required by law or for security, fraud prevention, and troubleshooting purposes.
            </p>
          </section>

          {/* 11 User Rights */}
          <section id="rights" style={{ marginBottom: '44px' }}>
            <div className="section-divider">
              <span className="section-num">11</span>
              <h2 className="section-heading">User Rights</h2>
            </div>
            <p className="body-text" style={{ marginBottom: '20px' }}>
              Users may exercise their rights under applicable local laws by contacting us at{' '}
              <a href="mailto:support@uctalent.io" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 500 }}>support@uctalent.io</a>.
              These rights include:
            </p>
            <div className="data-card" style={{ padding: '0 20px' }}>
              {[
                { title: 'Access and Portability', desc: 'Request access to and receive copies of your personal information.' },
                { title: 'Correction', desc: 'Request the correction or updating of inaccurate or incomplete data.' },
                { title: 'Deletion', desc: 'Request the deletion or anonymization of your data (or utilize the self-service account deletion feature in the app settings).' },
                { title: 'Withdraw Consent', desc: 'Withdraw your consent for data processing at any time.' },
                { title: 'Restriction and Objection', desc: 'Request that we temporarily restrict or pause the processing of your data or object to specific processing activities.' },
                { title: 'AI Transparency', desc: 'Request information regarding how your data is processed through our AI-assisted systems.' },
                { title: 'Lodge a Complaint', desc: 'File a complaint with competent data protection authorities if you believe your privacy rights have been violated.' },
              ].map((right) => (
                <div key={right.title} className="rights-item">
                  <div className="rights-dot"></div>
                  <div>
                    <div className="rights-title">{right.title}</div>
                    <div className="rights-desc">{right.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 12 Account Deletion */}
          <section id="deletion" style={{ marginBottom: '44px' }}>
            <div className="section-divider">
              <span className="section-num">12</span>
              <h2 className="section-heading">Account Deletion</h2>
            </div>
            <p className="body-text">
              Users can delete their account and all associated personal data directly within the UCBuddy app settings. Upon receiving a verified request, we will delete or anonymize personal information unless retention is required by law, security obligations, or legitimate business purposes.
            </p>
          </section>

          {/* 13 Security */}
          <section id="security" style={{ marginBottom: '44px' }}>
            <div className="section-divider">
              <span className="section-num">13</span>
              <h2 className="section-heading">Security</h2>
            </div>
            <p className="body-text" style={{ marginBottom: '12px' }}>
              We implement reasonable technical and organizational measures to protect user information against unauthorized access, disclosure, or loss.
            </p>
            <p className="body-text">
              While we strive to protect your information, no method of electronic transmission or storage is completely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          {/* 14 Children's Privacy */}
          <section id="children" style={{ marginBottom: '44px' }}>
            <div className="section-divider">
              <span className="section-num">14</span>
              <h2 className="section-heading">Children's Privacy</h2>
            </div>
            <p className="body-text">
              UCBuddy is intended for users aged 16 and above. We do not knowingly collect personal information from children under the age required by applicable law. If we become aware that such information has been collected, we will take reasonable steps to delete it.
            </p>
          </section>

          {/* 15 Permissions */}
          <section id="permissions" style={{ marginBottom: '44px' }}>
            <div className="section-divider">
              <span className="section-num">15</span>
              <h2 className="section-heading">App Permissions</h2>
            </div>
            <p className="body-text" style={{ marginBottom: '20px' }}>UCBuddy requests the following device permissions:</p>
            <div className="data-card" style={{ padding: 0, overflow: 'hidden' }}>
              {[
                { key: 'RECORD_AUDIO', val: 'Supports voice-to-text within the AI chat feature. Audio is only recorded when the user explicitly initiates voice input.' },
                { key: 'READ_MEDIA_IMAGES', val: 'Allows users to select profile photos and images from their device gallery for use in resumes and profiles.' },
                { key: 'INTERNET', val: 'Required to access AI services, synchronize user data, retrieve templates, and support analytics and crash reporting.' },
              ].map((perm) => (
                <div key={perm.key} className="perm-row">
                  <div className="perm-key">{perm.key}</div>
                  <div className="perm-val">{perm.val}</div>
                </div>
              ))}
            </div>
          </section>

          {/* 16 Contact */}
          <section id="contact" style={{ marginBottom: '44px' }}>
            <div className="section-divider">
              <span className="section-num">16</span>
              <h2 className="section-heading">Contact Information</h2>
            </div>
            <p className="body-text" style={{ marginBottom: '20px' }}>
              If you have questions about this Privacy Policy or wish to exercise your privacy rights, please reach out:
            </p>
            <div className="data-card" style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '6px', background: 'var(--accent-bg)', border: '1px solid var(--accent-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="var(--accent)" strokeWidth="1.8">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--sans)', fontSize: '12px', color: 'var(--ink-faint)', marginBottom: '3px' }}>Email us at</div>
                <a href="mailto:support@uctalent.io" style={{ fontFamily: 'var(--sans)', fontSize: '14px', fontWeight: 500, color: 'var(--accent)', textDecoration: 'none' }}>support@uctalent.io</a>
              </div>
            </div>
          </section>

          {/* 17 Changes */}
          <section id="changes" style={{ marginBottom: '44px' }}>
            <div className="section-divider">
              <span className="section-num">17</span>
              <h2 className="section-heading">Changes to This Policy</h2>
            </div>
            <p className="body-text">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated Effective Date. Continued use of UCBuddy after changes become effective constitutes acceptance of the revised Privacy Policy.
            </p>
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