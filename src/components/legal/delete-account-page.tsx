"use client";

import Image from "next/image";
import Link from "next/link";

import { useLegalScrollSpy } from "@/components/legal/legal-scroll-spy";
import { LEGAL_STYLES } from "@/components/legal/legal-styles";

const NAV_ITEMS = [
  { id: "overview", label: "Overview" },
  { id: "request", label: "How to Request Deletion" },
  { id: "flow", label: "What Happens After Confirmation" },
  { id: "deleted", label: "Data Permanently Deleted" },
  { id: "retained", label: "Data That May Be Retained" },
  { id: "help", label: "Need Help?" },
];

const FLOW_STEPS = [
  {
    num: "01",
    title: "Open the deletion action",
    body: "In the UCBuddy app, go to Settings -> Account -> Delete Account.",
  },
  {
    num: "02",
    title: "Review the warning",
    body: "A confirmation dialog explains that account deletion is permanent and cannot be undone.",
  },
  {
    num: "03",
    title: "Confirm deletion",
    body: "You must explicitly confirm that you want to permanently delete your account.",
  },
  {
    num: "04",
    title: "Deletion is processed",
    body: "UCBuddy calls the account deletion API and removes the account and associated personal data.",
  },
  {
    num: "05",
    title: "You are signed out",
    body: "After deletion succeeds, you are signed out and redirected to the onboarding or login screen.",
  },
];

const DELETED_DATA = [
  "Your UCBuddy user account",
  "Profile information",
  "Uploaded CVs and supporting documents",
  "Chat history and related messages",
  "Career preferences",
  "Saved jobs and related personal data",
];

const RETAINED_DATA = [
  {
    title: "Legal compliance",
    body: "Some limited records may be retained when required by applicable law or lawful requests from authorities.",
  },
  {
    title: "Security and fraud prevention",
    body: "Minimal records may be kept when necessary to investigate abuse, protect the platform, or prevent fraud.",
  },
  {
    title: "Dispute handling",
    body: "Limited records may be retained if needed to resolve complaints, enforce terms, or handle legal disputes.",
  },
];

export function DeleteAccountPage() {
  const { scrollToSection } = useLegalScrollSpy();

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <style>{LEGAL_STYLES}</style>

      <header
        className="sticky top-0 z-10 border-b bg-white"
        style={{ borderColor: "var(--border)" }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "0 24px",
            height: "60px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              textDecoration: "none",
            }}
          >
            <Image
              src="/images/ucbuddy-logo.png"
              alt="UCBuddy Logo"
              width={32}
              height={32}
              style={{ borderRadius: "6px" }}
              priority
            />
            <span
              style={{
                fontFamily: "var(--sans)",
                fontWeight: 600,
                fontSize: "16px",
                color: "var(--ink)",
                letterSpacing: "-0.01em",
              }}
            >
              UCBuddy
            </span>
          </Link>
          <span
            style={{
              marginLeft: "16px",
              fontFamily: "var(--sans)",
              fontSize: "13px",
              color: "var(--ink-faint)",
              paddingLeft: "16px",
              borderLeft: "1px solid var(--border)",
            }}
          >
            Account Deletion
          </span>
        </div>
      </header>

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 24px",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "0",
        }}
        className="lg:grid-cols-page"
      >
        <style>{`
          @media (min-width: 1024px) {
            .lg\\:grid-cols-page { grid-template-columns: 200px 1fr !important; gap: 64px !important; }
          }
        `}</style>

        <aside style={{ display: "none" }} className="lg-sidebar">
          <style>{`
            @media (min-width: 1024px) {
              .lg-sidebar { display: block !important; padding-top: 56px; }
              .lg-sidebar-inner { position: sticky; top: 84px; }
            }
          `}</style>
          <div className="lg-sidebar-inner">
            <p
              style={{
                fontFamily: "var(--sans)",
                fontSize: "10px",
                fontWeight: 600,
                letterSpacing: "0.08em",
                color: "var(--ink-faint)",
                textTransform: "uppercase",
                marginBottom: "12px",
                paddingLeft: "12px",
              }}
            >
              Contents
            </p>
            <nav style={{ display: "flex", flexDirection: "column" }}>
              {NAV_ITEMS.map((item) => (
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

        <main style={{ paddingTop: "48px", paddingBottom: "80px" }}>
          <div
            style={{
              marginBottom: "48px",
              paddingBottom: "32px",
              borderBottom: "1px solid var(--border)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--sans)",
                fontSize: "12px",
                fontWeight: 500,
                letterSpacing: "0.06em",
                color: "var(--ink-faint)",
                textTransform: "uppercase",
                marginBottom: "12px",
              }}
            >
              Public Compliance Page
            </p>
            <h1
              className="pp-serif"
              style={{
                fontSize: "2rem",
                fontWeight: 600,
                color: "var(--ink)",
                letterSpacing: "-0.02em",
                marginBottom: "16px",
                lineHeight: 1.2,
              }}
            >
              UCBuddy Account Deletion Guide
            </h1>
            <p className="body-text" style={{ marginBottom: "10px" }}>
              This page explains how to request permanent account deletion in
              UCBuddy, what personal data will be deleted, and what limited
              records may be retained for legal or security reasons.
            </p>
            <p className="body-text">
              Account deletion is requested from inside the UCBuddy mobile app.
              This website does not accept deletion requests directly.
            </p>
          </div>

          <section id="overview" style={{ marginBottom: "44px" }}>
            <div className="section-divider">
              <span className="section-num">01</span>
              <h2 className="section-heading">Overview</h2>
            </div>
            <p className="body-text" style={{ marginBottom: "12px" }}>
              UCBuddy allows users to permanently delete their account and
              associated personal data from within the app. This action is
              irreversible.
            </p>
            <p className="body-text">
              Once account deletion is completed, you are signed out and cannot
              recover the deleted account or its associated personal data.
            </p>
            <div className="callout">
              <strong>Important:</strong> If you want to keep any resumes, CVs,
              or other documents for your own records, export or save them
              before deleting your account.
            </div>
          </section>

          <section id="request" style={{ marginBottom: "44px" }}>
            <div className="section-divider">
              <span className="section-num">02</span>
              <h2 className="section-heading">How to Request Deletion</h2>
            </div>
            <p className="body-text" style={{ marginBottom: "18px" }}>
              To request account deletion, open the UCBuddy app and go to{" "}
              <strong style={{ color: "var(--ink)", fontWeight: 600 }}>
                Settings -&gt; Account -&gt; Delete Account
              </strong>
              .
            </p>
            <div className="data-card">
              <div className="data-card-title">Request method</div>
              <p className="body-text" style={{ margin: 0 }}>
                Deletion requests are submitted through the authenticated
                in-app account settings flow. The public website is provided as
                an informational guide for users and app store reviewers.
              </p>
            </div>
          </section>

          <section id="flow" style={{ marginBottom: "44px" }}>
            <div className="section-divider">
              <span className="section-num">03</span>
              <h2 className="section-heading">
                What Happens After Confirmation
              </h2>
            </div>
            <p className="body-text" style={{ marginBottom: "20px" }}>
              After you choose <strong>Delete Account</strong>, UCBuddy follows
              this flow:
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "12px",
              }}
            >
              {FLOW_STEPS.map((step) => (
                <div key={step.num} className="basis-card">
                  <div className="basis-card-num">{step.num}</div>
                  <div className="basis-card-title">{step.title}</div>
                  <div className="basis-card-body">{step.body}</div>
                </div>
              ))}
            </div>
          </section>

          <section id="deleted" style={{ marginBottom: "44px" }}>
            <div className="section-divider">
              <span className="section-num">04</span>
              <h2 className="section-heading">
                Data That Will Be Permanently Deleted
              </h2>
            </div>
            <p className="body-text" style={{ marginBottom: "20px" }}>
              When your deletion request is successfully processed, UCBuddy
              permanently deletes the following categories of personal data
              associated with your account:
            </p>
            <div className="data-card">
              <ul className="pp-list">
                {DELETED_DATA.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </section>

          <section id="retained" style={{ marginBottom: "44px" }}>
            <div className="section-divider">
              <span className="section-num">05</span>
              <h2 className="section-heading">Data That May Be Retained</h2>
            </div>
            <p className="body-text" style={{ marginBottom: "20px" }}>
              Some limited records may be retained when required by applicable
              law, or when necessary for security, fraud prevention, or dispute
              resolution. When those records are no longer required, they are
              deleted or anonymized.
            </p>
            <div className="data-card" style={{ padding: "0 20px" }}>
              {RETAINED_DATA.map((item) => (
                <div key={item.title} className="share-cat">
                  <div className="share-cat-title">{item.title}</div>
                  <div
                    style={{
                      fontFamily: "var(--sans)",
                      fontSize: "14px",
                      lineHeight: 1.65,
                      color: "var(--ink-muted)",
                    }}
                  >
                    {item.body}
                  </div>
                </div>
              ))}
            </div>
            <div className="callout-neutral">
              Account deletion does not remove files or documents that you
              previously downloaded or saved outside UCBuddy on your own
              devices or personal cloud storage.
            </div>
          </section>

          <section id="help" style={{ marginBottom: "44px" }}>
            <div className="section-divider">
              <span className="section-num">06</span>
              <h2 className="section-heading">Need Help?</h2>
            </div>
            <p className="body-text" style={{ marginBottom: "20px" }}>
              If you need help before or after requesting account deletion, you
              can contact UCBuddy support.
            </p>
            <div
              className="data-card"
              style={{ display: "flex", alignItems: "center", gap: "14px" }}
            >
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "6px",
                  background: "var(--accent-bg)",
                  border: "1px solid var(--accent-border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="1.8"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "var(--sans)",
                    fontSize: "12px",
                    color: "var(--ink-faint)",
                    marginBottom: "3px",
                  }}
                >
                  Support email
                </div>
                <a
                  href="mailto:support@uctalent.io"
                  style={{
                    fontFamily: "var(--sans)",
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "var(--accent)",
                    textDecoration: "none",
                  }}
                >
                  support@uctalent.io
                </a>
              </div>
            </div>
          </section>

          <footer
            style={{
              marginTop: "48px",
              paddingTop: "24px",
              borderTop: "1px solid var(--border)",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              gap: "8px",
            }}
          >
            <span
              style={{
                fontFamily: "var(--sans)",
                fontSize: "13px",
                color: "var(--ink-faint)",
              }}
            >
              Copyright 2026 UCBuddy | uctalent.io
            </span>
            <span
              style={{
                fontFamily: "var(--sans)",
                fontSize: "13px",
                color: "var(--ink-faint)",
              }}
            >
              Effective Date: June 10, 2026
            </span>
          </footer>
        </main>
      </div>
    </div>
  );
}
