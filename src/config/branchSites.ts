/**
 * Branch mini-site URLs.
 * - Local dev: use `npm run dev:york` / `dev:western` / `dev:mcmaster` ports.
 * - Production: use env overrides if provided; otherwise fall back to branch paths.
 */
export type BranchSlug = "york" | "western" | "mcmaster";

const LOCAL_BRANCH_ORIGINS: Record<BranchSlug, string> = {
  york: "http://localhost:4322/",
  western: "http://localhost:4323/",
  mcmaster: "http://localhost:4324/",
};

const PROD_BRANCH_ORIGINS: Record<BranchSlug, string> = {
  york: import.meta.env.PUBLIC_BRANCH_YORK_URL ?? "/york/",
  western: import.meta.env.PUBLIC_BRANCH_WESTERN_URL ?? "/western/",
  mcmaster: import.meta.env.PUBLIC_BRANCH_MCMASTER_URL ?? "/mcmaster/",
};

const LOCAL_HOSTS = new Set(["localhost", "127.0.0.1", "::1"]);

export function branchMicrositeUrl(slug: BranchSlug): string {
  const isLocalDev =
    import.meta.env.DEV ||
    import.meta.env.PUBLIC_BRANCH_USE_LOCAL === "true" ||
    LOCAL_HOSTS.has(import.meta.env.HOST ?? "");
  return isLocalDev ? LOCAL_BRANCH_ORIGINS[slug] : PROD_BRANCH_ORIGINS[slug];
}

export const branchMicrositeLinks = {
  york: branchMicrositeUrl("york"),
  western: branchMicrositeUrl("western"),
  mcmaster: branchMicrositeUrl("mcmaster"),
} as const;
