import type { Project } from "./projects";

/** Homepage card mark — replaces colored type pill (paths under /public) */
export const PROJECT_MARK_SRC: Record<string, string> = {
  "leidos-genai": "/logos/leidos-emblem.png",
  stepladder: "/projects/logos/stepladder.png",
  founderssuite: "/projects/logos/founderssuite.png",
};

const LEIDOS_TITLE_PREFIX = "Leidos ";

/** Leidos PNG includes a full-width white matte; tight crop matches non-white bbox (~900×500 source). */
const LEIDOS_LOGO_CLIP = "[clip-path:inset(29.8%_3.1%_30%_3.1%)]";

export type ProjectTitleMark =
  | { mode: "inline"; src: string; rest: string | null; restImageSrc?: string }
  | { mode: "text" };

/** Wordmark + remainder for feed cards and case study heroes */
export function getProjectTitleMark(slug: string, title: string): ProjectTitleMark {
  if (slug === "leidos-genai") {
    const src = PROJECT_MARK_SRC["leidos-genai"];
    if (src && title.startsWith(LEIDOS_TITLE_PREFIX)) {
      return { mode: "inline", src, rest: title.slice(LEIDOS_TITLE_PREFIX.length) };
    }
  }
  if (slug === "stepladder") {
    const src = PROJECT_MARK_SRC.stepladder;
    if (src) {
      return { mode: "inline", src, rest: title };
    }
  }
  if (slug === "founderssuite") {
    const src = PROJECT_MARK_SRC.founderssuite;
    if (src) {
      return { mode: "inline", src, rest: title };
    }
  }
  return { mode: "text" };
}

export function projectUsesInlineTitleMark(slug: string): boolean {
  return slug === "leidos-genai" || slug === "stepladder" || slug === "founderssuite";
}

const HERO_TITLE_MARK_IMG_BASE =
  "inline-block h-[2.55em] w-auto max-w-[min(100vw,44rem)] shrink-0 object-contain object-left md:h-[2.4em] md:max-w-[54rem] lg:h-[2.25em] lg:max-w-[62rem]";

/** Larger inline Leidos mark (hero) — clip + margin collapse must use the same em heights. */
const LEIDOS_HERO_TITLE_MARK_IMG =
  "inline-block h-[2.95em] w-auto max-w-[min(100vw,48rem)] shrink-0 object-contain object-left md:h-[2.76em] md:max-w-[58rem] lg:h-[2.58em] lg:max-w-[70rem]";

const CARD_TITLE_MARK_IMG_BASE =
  "inline-block h-[2.65em] w-auto max-w-[min(100vw,32rem)] shrink-0 object-contain object-left md:h-[2.5em] md:max-w-[40rem]";

/** Larger inline Leidos mark (homepage card). */
const LEIDOS_CARD_TITLE_MARK_IMG =
  "inline-block h-[3.05em] w-auto max-w-[min(100vw,36rem)] shrink-0 object-contain object-left md:h-[2.88em] md:max-w-[44rem]";

/** StepLadder card: icon-only mark — much smaller than wordmarks so it matches the h2 cap height. */
const STEPLADDER_CARD_TITLE_MARK_IMG =
  "inline-block h-[1.2em] w-auto max-w-[2rem] shrink-0 object-contain object-left md:h-[1.14em] md:max-w-[2.125rem]";

/** FoundersSuite card: wordmark beside title. */
const FOUNDERSUITE_CARD_TITLE_MARK_IMG =
  "inline-block h-[2.25em] w-auto max-w-[11rem] shrink-0 object-contain object-left md:h-[2.5em] md:max-w-[13rem]";

/** FoundersSuite case study hero wordmark. */
const FOUNDERSUITE_HERO_TITLE_MARK_IMG =
  "inline-block h-[2.85em] w-auto max-w-[14rem] shrink-0 object-contain object-left md:h-[3.1em] md:max-w-[17rem] lg:h-[3.25em] lg:max-w-[20rem]";

/** Case study hero h1 (text-5xl–7xl). Leidos uses matte crop + margin collapse instead of relative nudge. */
export function projectHeroTitleMarkImgClass(slug: string): string {
  if (slug === "leidos-genai") {
    return `${LEIDOS_HERO_TITLE_MARK_IMG} ${LEIDOS_LOGO_CLIP} -my-[calc(0.298*2.95em)] md:-my-[calc(0.298*2.76em)] lg:-my-[calc(0.298*2.58em)] align-middle`;
  }
  if (slug === "founderssuite") {
    return `relative top-[0.04em] ${FOUNDERSUITE_HERO_TITLE_MARK_IMG} align-middle`;
  }
  const nudge = "top-[0.04em]";
  return `relative ${nudge} ${HERO_TITLE_MARK_IMG_BASE}`;
}

/** Homepage project card h2 (text-xl–2xl) */
export function projectCardTitleMarkImgClass(slug: string): string {
  if (slug === "leidos-genai") {
    return `${LEIDOS_CARD_TITLE_MARK_IMG} ${LEIDOS_LOGO_CLIP} -my-[calc(0.298*3.05em)] md:-my-[calc(0.298*2.88em)] align-middle`;
  }
  if (slug === "stepladder") {
    return `relative top-[0.04em] ${STEPLADDER_CARD_TITLE_MARK_IMG}`;
  }
  if (slug === "founderssuite") {
    return `relative top-[0.04em] ${FOUNDERSUITE_CARD_TITLE_MARK_IMG}`;
  }
  return `relative top-[0.06em] ${CARD_TITLE_MARK_IMG_BASE}`;
}

/** Title text beside the Leidos wordmark: top padding nudges the line down vs. the logo (`inline-block` so padding applies). */
export function projectLeidosTitleRestClass(slug: string): string | undefined {
  if (slug !== "leidos-genai") return undefined;
  return "inline-block pt-[0.40em]";
}

export function getProjectMarkSrc(slug: string): string | undefined {
  return PROJECT_MARK_SRC[slug];
}

/** Canonical URL for a project's case study or dedicated page */
export function getProjectCaseStudyPath(slug: string): string {
  if (slug === "stepladder") return "/stepladder";
  return `/projects/${slug}`;
}

export function getProjectCaseStudyHref(project: Project): string {
  return getProjectCaseStudyPath(project.slug);
}
