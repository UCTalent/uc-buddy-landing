import type { messages } from "@/i18n";

import "next-intl";

declare module "next-intl" {
  interface AppConfig {
    Locale: "en";
    Messages: typeof messages;
  }
}
