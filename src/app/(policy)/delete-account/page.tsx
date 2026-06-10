import type { Metadata } from "next";

import { DeleteAccountPage } from "@/components/legal/delete-account-page";
import { SITE_CONFIG } from "@/constants/site";

export const metadata: Metadata = {
  title: "Delete Account",
  description:
    "Learn how to request UCBuddy account deletion, what personal data is permanently deleted, and what limited records may be retained.",
  alternates: {
    canonical: `${SITE_CONFIG.baseUrl}/delete-account`,
  },
  openGraph: {
    title: "Delete Account | UCBuddy AI",
    description:
      "Public instructions for deleting your UCBuddy account and understanding what data is removed or retained.",
    url: `${SITE_CONFIG.baseUrl}/delete-account`,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Delete Account | UCBuddy AI",
    description:
      "Public instructions for deleting your UCBuddy account and understanding what data is removed or retained.",
  },
};

export default function DeleteAccountRoute() {
  return <DeleteAccountPage />;
}
