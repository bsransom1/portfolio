import type { Project } from "./projects";

/** Timeline labels shown on homepage project cards */
export const PROJECT_DEV_RANGES: Record<string, string> = {
  "leidos-genai": "January '26 – June '26",
  stepladder: "June '25 – December '26",
  lua: "September '24 – January '25",
  versology: "June '25 – November '25",
};

export function getProjectDevRange(slug: string): string {
  return PROJECT_DEV_RANGES[slug] ?? "—";
}

/** Homepage card mark — replaces colored type pill (paths under /public) */
export const PROJECT_MARK_SRC: Record<string, string> = {
  "leidos-genai": "/projects/logos/leidos.png",
  stepladder: "/projects/logos/stepladder.png",
  versology: "/projects/logos/versology.png",
  lua: "/projects/logos/lua-star.png",
};

/** Blue “Lua” wordmark image (replaces typeset title text beside the star). */
export const LUA_WORDMARK_SRC = "/projects/logos/lua-wordmark.png";

const LUA_STAR_SRC = "/projects/logos/lua-star.png";

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
  if (slug === "lua") {
    if (title === "Lua") {
      return {
        mode: "inline",
        src: LUA_STAR_SRC,
        rest: null,
        restImageSrc: LUA_WORDMARK_SRC,
      };
    }
    if (title.startsWith("Lua ")) {
      return { mode: "inline", src: LUA_STAR_SRC, rest: title.slice(4) };
    }
  }
  if (slug === "stepladder") {
    const src = PROJECT_MARK_SRC.stepladder;
    if (src) {
      return { mode: "inline", src, rest: title };
    }
  }
  return { mode: "text" };
}

export function projectUsesInlineTitleMark(slug: string): boolean {
  return slug === "leidos-genai" || slug === "lua" || slug === "stepladder";
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

/** Lua card: star badge — fixed rem so imgs never blow up to intrinsic PNG size. */
const LUA_CARD_TITLE_MARK_IMG =
  "inline-block h-9 w-9 max-h-9 max-w-9 shrink-0 object-contain object-center rounded-full [filter:drop-shadow(0_1px_3px_rgb(0_0_0_/_0.12))] align-middle md:h-10 md:w-10 md:max-h-10 md:max-w-10";

/** Lua hero: star beside h1 — rem-capped, matches headline scale. */
const LUA_HERO_TITLE_MARK_IMG =
  "inline-block h-12 w-12 max-h-12 max-w-12 shrink-0 object-contain object-center rounded-full [filter:drop-shadow(0_2px_5px_rgb(0_0_0_/_0.14))] align-middle sm:h-14 sm:w-14 sm:max-h-14 sm:max-w-14 md:h-16 md:w-16 md:max-h-16 md:max-w-16";

/** Blue wordmark on card h2 (next to star). */
const LUA_CARD_WORDMARK_IMG =
  "relative top-px inline-block h-14 w-auto min-w-0 max-h-14 max-w-[20rem] shrink object-contain object-left md:h-16 md:max-h-16 md:max-w-[24rem]";

/** Wordmark on case-study hero — bounded height/width, never full viewport. */
const LUA_HERO_WORDMARK_IMG =
  "relative top-0.5 inline-block h-20 w-auto min-w-0 max-h-20 max-w-[24rem] shrink object-contain object-left sm:h-[5rem] sm:max-h-[5rem] sm:max-w-[28rem] md:h-24 md:max-h-24 md:max-w-[32rem] lg:h-28 lg:max-h-28 lg:max-w-[38rem]";

/** Case study hero h1 (text-5xl–7xl). Leidos uses matte crop + margin collapse instead of relative nudge. */
export function projectHeroTitleMarkImgClass(slug: string): string {
  if (slug === "leidos-genai") {
    return `${LEIDOS_HERO_TITLE_MARK_IMG} ${LEIDOS_LOGO_CLIP} -my-[calc(0.298*2.95em)] md:-my-[calc(0.298*2.76em)] lg:-my-[calc(0.298*2.58em)] align-middle`;
  }
  if (slug === "lua") {
    return LUA_HERO_TITLE_MARK_IMG;
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
  if (slug === "lua") {
    return LUA_CARD_TITLE_MARK_IMG;
  }
  return `relative top-[0.06em] ${CARD_TITLE_MARK_IMG_BASE}`;
}

export function projectLuaWordmarkCardClass(): string {
  return LUA_CARD_WORDMARK_IMG;
}

export function projectLuaWordmarkHeroClass(): string {
  return LUA_HERO_WORDMARK_IMG;
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
