import { articles } from "./articles";
import { projects } from "./projects";
import { getProjectCaseStudyPath } from "./projectMeta";

export type SiteSearchKind = "project" | "article";

export interface SiteSearchHit {
  id: string;
  kind: SiteSearchKind;
  title: string;
  meta: string;
  href: string;
  external: boolean;
}

function matches(haystack: string, q: string): boolean {
  const n = q.trim().toLowerCase();
  if (!n) return false;
  return haystack.toLowerCase().includes(n);
}

export function siteSearch(query: string): { projects: SiteSearchHit[]; articles: SiteSearchHit[] } {
  const q = query.trim();
  if (!q) return { projects: [], articles: [] };

  const projectHits: SiteSearchHit[] = projects
    .filter(
      (p) =>
        matches(p.title, q) ||
        matches(p.description, q) ||
        matches(p.type, q) ||
        matches(p.slug.replace(/-/g, " "), q) ||
        p.tags.some((t) => matches(t, q))
    )
    .map((p) => ({
      id: `project-${p.slug}`,
      kind: "project" as const,
      title: p.title,
      meta: p.type,
      href: getProjectCaseStudyPath(p.slug),
      external: false,
    }));

  const articleHits: SiteSearchHit[] = articles
    .filter((a) => matches(a.title, q) || matches(a.category, q))
    .map((a) => ({
      id: `article-${a.id}`,
      kind: "article" as const,
      title: a.title,
      meta: a.category,
      href: a.url,
      external: true,
    }));

  return { projects: projectHits, articles: articleHits };
}
