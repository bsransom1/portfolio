"use client";

import type { ComponentType, SVGProps } from "react";
import {
  BarChart3,
  ClipboardList,
  FileText,
  GraduationCap,
  HeartPulse,
  Layers,
  PenLine,
  Smartphone,
  Sparkles,
  Upload,
  Users,
} from "lucide-react";
import {
  SiApple,
  SiCapacitor,
  SiDocker,
  SiFigma,
  SiJsonwebtokens,
  SiMarkdown,
  SiNextdotjs,
  SiOpenai,
  SiPostgresql,
  SiRadixui,
  SiReact,
  SiResend,
  SiShadcnui,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiZod,
} from "react-icons/si";

type IconComponent = ComponentType<SVGProps<SVGSVGElement> & { className?: string }>;

export type StackCaseStudyColumn = "overview" | "frontend" | "backend";

export type StackItem = {
  id: string;
  title: string;
  label: string;
  /** Short blurb for case study table cells */
  detail: string;
  Icon: IconComponent;
  caseStudyColumn: StackCaseStudyColumn;
};

const STEPLADDER_STACK: StackItem[] = [
  {
    id: "stack",
    title: "Architecture",
    label: "Full stack",
    detail: "One Next.js app: therapist/patient UI and JSON APIs together—shared auth and validation.",
    Icon: Layers,
    caseStudyColumn: "overview",
  },
  {
    id: "next",
    title: "Next.js 14",
    label: "Next.js 14 (App Router, route handlers)",
    detail: "Layouts for dashboards vs homework flows; server lists where it keeps bundles small.",
    Icon: SiNextdotjs,
    caseStudyColumn: "frontend",
  },
  {
    id: "react",
    title: "React 18",
    label: "React 18",
    detail: "Forms, modals, worksheets; local state for SUDS and steps, posts to API routes.",
    Icon: SiReact,
    caseStudyColumn: "frontend",
  },
  {
    id: "ts",
    title: "TypeScript",
    label: "TypeScript",
    detail: "Shared types for assignments and APIs so client and route handlers stay in sync.",
    Icon: SiTypescript,
    caseStudyColumn: "frontend",
  },
  {
    id: "tailwind",
    title: "Tailwind CSS",
    label: "Tailwind CSS",
    detail: "Utility spacing/type for dense clinical screens; breakpoints for phone vs laptop review.",
    Icon: SiTailwindcss,
    caseStudyColumn: "frontend",
  },
  {
    id: "supabase",
    title: "Supabase client",
    label: "Supabase (@supabase/supabase-js)",
    detail: "Browser client for auth-backed reads/writes to the shared Postgres project.",
    Icon: SiSupabase,
    caseStudyColumn: "frontend",
  },
  {
    id: "recharts",
    title: "Recharts",
    label: "Recharts (analytics)",
    detail: "Therapist dashboards: completion, SUDS trends, modality mix from aggregated queries.",
    Icon: BarChart3,
    caseStudyColumn: "frontend",
  },
  {
    id: "postgres",
    title: "PostgreSQL",
    label: "PostgreSQL (pg alternate / migrations)",
    detail: "Relational model: providers, caseloads, submissions, migrations in repo.",
    Icon: SiPostgresql,
    caseStudyColumn: "backend",
  },
  {
    id: "zod",
    title: "Zod",
    label: "Zod (API validation)",
    detail: "Parse route bodies/params before DB; structured 4xx instead of raw constraint errors.",
    Icon: SiZod,
    caseStudyColumn: "backend",
  },
  {
    id: "jwt",
    title: "Custom auth",
    label: "Custom auth (JWT + bcrypt)",
    detail: "bcrypt passwords, signed JWTs, role claims for therapist/patient/admin gates.",
    Icon: SiJsonwebtokens,
    caseStudyColumn: "backend",
  },
  {
    id: "resend",
    title: "Resend",
    label: "Resend (transactional email)",
    detail: "Invites and reminders—templates and deliverability for between-session follow-through.",
    Icon: SiResend,
    caseStudyColumn: "backend",
  },
  {
    id: "docker",
    title: "Docker",
    label: "Docker (container deploy)",
    detail: "Pinned Node images; one artifact for staging/production clinic demos.",
    Icon: SiDocker,
    caseStudyColumn: "backend",
  },
];

const VERSOLOGY_STACK: StackItem[] = [
  {
    id: "shape",
    title: "Shape",
    label: "Web + mobile shell",
    detail: "Web reader + Capacitor iOS shell; Supabase + OpenAI only on server routes (keys never client).",
    Icon: Layers,
    caseStudyColumn: "overview",
  },
  {
    id: "next",
    title: "Next.js 15",
    label: "Next.js 15 (App Router)",
    detail: "Marketing vs study areas; RSC prefetch; client islands for search and scripture nav.",
    Icon: SiNextdotjs,
    caseStudyColumn: "frontend",
  },
  {
    id: "react",
    title: "React 19",
    label: "React 19",
    detail: "Search and cross-refs stay responsive; TipTap isolated from heavy list virtualization.",
    Icon: SiReact,
    caseStudyColumn: "frontend",
  },
  {
    id: "ts",
    title: "TypeScript",
    label: "TypeScript",
    detail: "Archive types (passages, terms, people) and API contracts aligned with Supabase data.",
    Icon: SiTypescript,
    caseStudyColumn: "frontend",
  },
  {
    id: "tailwind",
    title: "Tailwind v4",
    label: "Tailwind CSS v4 + PostCSS",
    detail: "Reading layouts, dark tokens; v4 + PostCSS without a parallel CSS architecture.",
    Icon: SiTailwindcss,
    caseStudyColumn: "frontend",
  },
  {
    id: "radix",
    title: "Radix UI",
    label: "Radix UI primitives",
    detail: "Accessible dialogs, comboboxes, focus/ARIA for desk and mobile study.",
    Icon: SiRadixui,
    caseStudyColumn: "frontend",
  },
  {
    id: "shadcn",
    title: "shadcn-style UI",
    label: "shadcn-style UI (CVA, clsx, tailwind-merge)",
    detail: "CVA variants + tailwind-merge for consistent buttons/cards and safe class merges.",
    Icon: SiShadcnui,
    caseStudyColumn: "frontend",
  },
  {
    id: "motion",
    title: "Framer Motion",
    label: "Framer Motion",
    detail: "Panel choreography and cross-fades; scoped to client subtrees only.",
    Icon: Sparkles,
    caseStudyColumn: "frontend",
  },
  {
    id: "tiptap",
    title: "TipTap",
    label: "TipTap (rich text)",
    detail: "Notes/snippets editor with constrained schema; JSON serialization for storage.",
    Icon: PenLine,
    caseStudyColumn: "frontend",
  },
  {
    id: "capacitor",
    title: "Capacitor 7",
    label: "Capacitor 7 (iOS, keyboard plugin)",
    detail: "iOS keyboard + safe-area so reading chrome does not jump on focus.",
    Icon: SiCapacitor,
    caseStudyColumn: "frontend",
  },
  {
    id: "supabase",
    title: "Supabase",
    label: "Supabase (auth, DB, sync)",
    detail: "Auth, Postgres archive tree, optional realtime for cross-device progress.",
    Icon: SiSupabase,
    caseStudyColumn: "backend",
  },
  {
    id: "openai",
    title: "OpenAI",
    label: "OpenAI (/api/chat route handler)",
    detail: "Server `/api/chat` streams tokens (SSE); prompts never exposed in the client bundle.",
    Icon: SiOpenai,
    caseStudyColumn: "backend",
  },
];

const LEIDOS_STACK: StackItem[] = [
  {
    id: "shape",
    title: "Hosting",
    label: "Full stack (Vercel)",
    detail: "Next on Vercel: static shell, serverless PDF + model work, Postgres via Supabase.",
    Icon: Layers,
    caseStudyColumn: "overview",
  },
  {
    id: "next",
    title: "Next.js 16",
    label: "Next.js 16 (App Router, app/api)",
    detail: "Workspaces and admin shells; `app/api` for uploads, parsing, streaming Claude output.",
    Icon: SiNextdotjs,
    caseStudyColumn: "frontend",
  },
  {
    id: "react",
    title: "React 19",
    label: "React 19",
    detail: "PDF previews, diff UIs, optimistic saves; Suspense isolates slow RAG from chrome.",
    Icon: SiReact,
    caseStudyColumn: "frontend",
  },
  {
    id: "ts",
    title: "TypeScript",
    label: "TypeScript",
    detail: "Entities and RBAC from DB through responses—no viewer/editor field drift.",
    Icon: SiTypescript,
    caseStudyColumn: "frontend",
  },
  {
    id: "tailwind",
    title: "Tailwind 4",
    label: "Tailwind CSS 4 (@tailwindcss/postcss)",
    detail: "Dense tables, upload wizards, status chips under time pressure; v4 PostCSS wiring.",
    Icon: SiTailwindcss,
    caseStudyColumn: "frontend",
  },
  {
    id: "dropzone",
    title: "react-dropzone",
    label: "react-dropzone (PDF uploads)",
    detail: "Client pick/drag with type/size gates before streaming to `/api/upload`.",
    Icon: Upload,
    caseStudyColumn: "frontend",
  },
  {
    id: "markdown",
    title: "react-markdown",
    label: "react-markdown (proposal body)",
    detail: "GFM with constrained components—no raw model HTML (XSS-safe rendering).",
    Icon: SiMarkdown,
    caseStudyColumn: "frontend",
  },
  {
    id: "supabase",
    title: "Supabase + SSR",
    label: "Supabase (@supabase/ssr, Auth, DB)",
    detail: "Cookie sessions via middleware; RLS encodes viewer/editor/admin at the database.",
    Icon: SiSupabase,
    caseStudyColumn: "backend",
  },
  {
    id: "postgres",
    title: "PostgreSQL",
    label: "PostgreSQL (supabase/ SQL)",
    detail: "Solicitations, extracted rows, embeddings, audit log—versioned SQL migrations.",
    Icon: SiPostgresql,
    caseStudyColumn: "backend",
  },
  {
    id: "openai",
    title: "OpenAI SDK",
    label: "OpenAI SDK (GPT generation)",
    detail: "Server-only SDK: outlines, rewrites, confidence summaries → markdown/JSON to client.",
    Icon: SiOpenai,
    caseStudyColumn: "backend",
  },
  {
    id: "pdf",
    title: "pdf2json",
    label: "pdf2json (server PDF text extraction)",
    detail: "Node parsing for SHALL/MUST spans; bounded timeouts and recoverable failures.",
    Icon: FileText,
    caseStudyColumn: "backend",
  },
  {
    id: "resend",
    title: "Resend",
    label: "Resend (collaborator invites)",
    detail: "Invite mail with signed deep links scoped to the right solicitation workspace.",
    Icon: SiResend,
    caseStudyColumn: "backend",
  },
];

const LUA_STACK: StackItem[] = [
  {
    id: "shape",
    title: "Sprint shape",
    label: "Product / UX stack",
    detail: "Research-first: Figma + light React—prove flows before committing to native shipping.",
    Icon: Layers,
    caseStudyColumn: "overview",
  },
  {
    id: "figma",
    title: "Figma",
    label: "Figma (UI, high-fidelity prototype)",
    detail: "Hi-fi onboarding, breathing, check-ins; components for fast iteration from interviews.",
    Icon: SiFigma,
    caseStudyColumn: "frontend",
  },
  {
    id: "react",
    title: "React prototype",
    label: "React (prototype / web reference)",
    detail: "State spike for skips/history—not production mobile; informed later native choice.",
    Icon: SiReact,
    caseStudyColumn: "frontend",
  },
  {
    id: "ts",
    title: "TypeScript",
    label: "TypeScript",
    detail: "Step enums and event shapes so test builds do not rot into string soup.",
    Icon: SiTypescript,
    caseStudyColumn: "frontend",
  },
  {
    id: "mobile",
    title: "Mobile UX",
    label: "Mobile app (guided health flow)",
    detail: "One-handed, short sessions, large targets—motion kept low for sensitivity.",
    Icon: Smartphone,
    caseStudyColumn: "frontend",
  },
  {
    id: "ios",
    title: "iOS patterns",
    label: "iOS-oriented patterns",
    detail: "Sheets, safe-area, haptics framing so the concept reads as App Store–credible.",
    Icon: SiApple,
    caseStudyColumn: "frontend",
  },
  {
    id: "research",
    title: "Interviews",
    label: "User interviews & synthesis",
    detail: "Semi-structured sessions → affinity maps and concrete flow edits.",
    Icon: Users,
    caseStudyColumn: "backend",
  },
  {
    id: "synthesis",
    title: "Benchmarking",
    label: "Research notes & benchmarking",
    detail: "Comp scans: adopt proven calm-app patterns; avoid shame/streak dark patterns.",
    Icon: ClipboardList,
    caseStudyColumn: "backend",
  },
  {
    id: "health",
    title: "Domain",
    label: "Anxiety & regulation domain",
    detail: "Copy and pacing aligned to anxiety UX ethics—optional drills, obvious exits.",
    Icon: HeartPulse,
    caseStudyColumn: "backend",
  },
  {
    id: "academic",
    title: "Academic frame",
    label: "Health informatics sprint / academic",
    detail: "Rubric-driven scope: evidence, ethics, feasibility vs prototype depth in narrative.",
    Icon: GraduationCap,
    caseStudyColumn: "backend",
  },
];

const BY_SLUG: Partial<Record<string, StackItem[]>> = {
  stepladder: STEPLADDER_STACK,
  versology: VERSOLOGY_STACK,
  "leidos-genai": LEIDOS_STACK,
  lua: LUA_STACK,
};

/** Homepage card footer: 4–6 highlighted tools (no chevrons, no full-stack tile). */
const HOMEPAGE_STRIP_IDS: Partial<Record<string, string[]>> = {
  stepladder: ["next", "react", "ts", "supabase", "postgres", "docker"],
  versology: ["next", "react", "ts", "tailwind", "supabase", "openai"],
  "leidos-genai": ["next", "react", "ts", "supabase", "openai", "postgres"],
  lua: ["figma"],
};

export function getHomepageStackStripItems(slug: string): StackItem[] {
  const all = BY_SLUG[slug];
  const ids = HOMEPAGE_STRIP_IDS[slug];
  if (!all?.length || !ids?.length) return [];
  return ids
    .map((id) => all.find((item) => item.id === id))
    .filter((item): item is StackItem => Boolean(item));
}

export type CaseStudyStackTable = {
  /** Full overview row (every stack entry lives in the table, including this one). */
  overview: StackItem | undefined;
  leftHeader: string;
  rightHeader: string;
  frontend: StackItem[];
  backend: StackItem[];
};

export function getCaseStudyStackTable(slug: string): CaseStudyStackTable | undefined {
  const items = BY_SLUG[slug];
  if (!items?.length) return undefined;

  const overview = items.find((i) => i.caseStudyColumn === "overview");

  const leftHeader = slug === "lua" ? "Design & prototype" : "Frontend";
  const rightHeader = slug === "lua" ? "Research & validation" : "Backend";

  return {
    overview,
    leftHeader,
    rightHeader,
    frontend: items.filter((i) => i.caseStudyColumn === "frontend"),
    backend: items.filter((i) => i.caseStudyColumn === "backend"),
  };
}

export function getProjectStackItems(slug: string): StackItem[] | undefined {
  const items = BY_SLUG[slug];
  return items?.length ? items : undefined;
}

export function projectHasStackStrip(slug: string): boolean {
  return Boolean(BY_SLUG[slug]?.length);
}

/** Homepage: a few highlighted stack icons in the card footer (curated list per project). */
export default function ProjectStackStrip({ slug }: { slug: string }) {
  const items = getHomepageStackStripItems(slug);
  if (!items.length) return null;

  return (
    <div
      className="flex max-w-full flex-wrap items-center justify-end gap-3 sm:gap-3.5 md:max-w-none"
      aria-label="Tech stack highlights"
    >
      {items.map((item) => {
        const Icon = item.Icon;
        return (
          <span
            key={item.id}
            className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-black transition-colors hover:bg-neutral-100"
            title={item.label}
          >
            <Icon className="h-[1.125rem] w-[1.125rem]" aria-hidden />
          </span>
        );
      })}
    </div>
  );
}
