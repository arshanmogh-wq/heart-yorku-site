/**
 * Branch mini-site URLs (match `npm run dev:york` / `dev:western` / `dev:mcmaster` ports).
 * Update when you deploy real branch domains.
 */
export type BranchSlug = "york" | "western" | "mcmaster";

const LOCAL_BRANCH_ORIGINS: Record<BranchSlug, string> = {
  york: "http://localhost:4322/",
  western: "http://localhost:4323/",
  mcmaster: "http://localhost:4324/",
};

export function branchMicrositeUrl(slug: BranchSlug): string {
  return LOCAL_BRANCH_ORIGINS[slug];
}

export const branchMicrositeLinks = {
  york: branchMicrositeUrl("york"),
  western: branchMicrositeUrl("western"),
  mcmaster: branchMicrositeUrl("mcmaster"),
} as const;
