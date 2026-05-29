import type { Metadata } from "next";

import { SITE_CONFIG } from "@/constants/site";

export const APP_LAYOUT_METADATA: Metadata = {
  applicationName: "UCBuddy AI",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  metadataBase: new URL(SITE_CONFIG.baseUrl),
  title: {
    default: "UCBuddy AI | AI-Powered CV & Resume Builder",
    template: "%s | UCBuddy AI",
  },
  icons: {
    icon: "/icons/ucbuddy-logo.png",
    apple: "/icons/ucbuddy-logo.png",
  },
  description:
    "Build, tailor, and optimize your professional CV with UCBuddy AI. Get personalized career guidance, real-time job fit analysis, and voice-to-CV features to land your dream job faster.",
  keywords: [
    "UCBuddy AI",
    "AI CV Builder",
    "Smart Resume Maker",
    "Job Description Matching",
    "Career Guidance AI",
    "CV Tailoring",
    "Resume Optimization",
    "AI Job Application",
    "Voice-to-CV",
    "Professional Resume",
    "Job Fit Analysis",
    "Career Tool",
  ],
  authors: [{ name: "UCBuddy Team", url: SITE_CONFIG.baseUrl }],
  creator: "UCBuddy Team",
  publisher: "UCBuddy AI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_CONFIG.baseUrl,
  },
  verification: {
    google: "4kSLgxKYQK5ZZt3GmGs-sfQAlRNqRXBNTM3KPm56-Kc",
  },
  openGraph: {
    title: "UCBuddy AI | AI-Powered CV & Resume Builder",
    description:
      "Build, tailor, and optimize your professional CV with UCBuddy AI. Get personalized career guidance, real-time job fit analysis, and voice-to-CV features to land your dream job faster.",
    url: SITE_CONFIG.baseUrl,
    siteName: "UCBuddy AI",
    images: [
      {
        url: "/images/privacy-policy-og.jpg",
        width: 1200,
        height: 630,
        alt: "UCBuddy AI - AI-Powered CV & Resume Builder",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UCBuddy AI | AI-Powered CV & Resume Builder",
    description:
      "Build, tailor, and optimize your professional CV with UCBuddy AI. Get personalized career guidance, real-time job fit analysis, and voice-to-CV features to land your dream job faster.",
    images: ["/images/privacy-policy-og.jpg"],
    creator: "@ucbuddyai", // Assuming handle or remove if not applicable
  },
  appleWebApp: {
    title: "UCBuddy AI",
    statusBarStyle: "default",
    capable: true,
  },
};
