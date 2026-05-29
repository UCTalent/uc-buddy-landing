// ============================================================================
// SITE CONFIGURATION
// Central place for site-wide constants
// ============================================================================

export const SITE_CONFIG = {
  /**
   * Base URL of the website (used for SEO, sitemap, etc.)
   */
  baseUrl: "https://ucbuddy.ai",

  /**
   * Default locale for the site
   * This should match the i18n configuration
   */
  defaultLocale: "en",

  /**
   * Supported locales
   */
  locales: ["en"] as const,
} as const;

export type SupportedLocale = (typeof SITE_CONFIG.locales)[number];
