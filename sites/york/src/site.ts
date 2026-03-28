/** Main HEART club site (all branches). Update when you move to heart.ca etc. */
export const MAIN_CLUB_SITE = "https://heart-yorku-site.pages.dev";

/** Branch-specific copy, contact, and theme metadata — customize per mini-site. */
export const branch = {
  slug: "york",
  universityName: "York University",
  shortName: "York",
  homeNavLabel: "York home",
  footerBrandTitle: "HEART · York",
  footerCopyright: "HEART — York University branch",
  orgSchemaName: "HEART — York University branch",
  orgAlternateName: "Health Equity Advocacy Response Team — York",
  siteOgName: "HEART York",
  websiteAlternateName: "HEART — York University branch",
  navAriaLabel: "York branch navigation",
  navId: "york-branch-navigation",
  disclaimer: "This is a student-led website and is not an official York University website.",
  contactEmail: "heartyorku@gmail.com",
  instagramUrl: "https://www.instagram.com/heart_yorku",
  instagramHandle: "@heart_yorku",
  themeColor: "#E31837",
  defaultTitle: "HEART York — Health Equity Advocacy Response Team",
  defaultDescription:
    "HEART at York University: student-led health equity advocacy, education, outreach, and community partnerships.",
  logoSrc: "/images/branch-logo.svg",
  socialImage: "/social-card.svg",
} as const;
