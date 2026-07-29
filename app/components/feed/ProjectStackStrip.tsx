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

const FOUNDERSUITE_STACK: StackItem[] = [
  {
    id: "shape",
    title: "Two-sided marketplace",
    label: "React web app (founder + tester)",
    detail: "Full-stack discovery marketplace: matcher feeds, profiles, community board, and AI summaries in one product.",
    Icon: Users,
    caseStudyColumn: "overview",
  },
  {
    id: "react",
    title: "React",
    label: "React (SPA UI)",
    detail: "Founder dashboard, Tinder-style matcher, tester feed, and onboarding flows built as a two-sided web interface.",
    Icon: SiReact,
    caseStudyColumn: "frontend",
  },
  {
    id: "ts",
    title: "TypeScript",
    label: "TypeScript",
    detail: "Shared types for profiles, matches, and API payloads so founder and tester surfaces stay aligned.",
    Icon: SiTypescript,
    caseStudyColumn: "frontend",
  },
  {
    id: "tailwind",
    title: "Tailwind CSS",
    label: "Tailwind CSS",
    detail: "Responsive layouts for dense B2B cards, match feeds, and accessibility-minded color tokens from user walkthroughs.",
    Icon: SiTailwindcss,
    caseStudyColumn: "frontend",
  },
  {
    id: "postgres",
    title: "SQL backend",
    label: "SQL / PostgreSQL",
    detail: "Relational store for companies, tester profiles, matches, and conversation metadata.",
    Icon: SiPostgresql,
    caseStudyColumn: "backend",
  },
  {
    id: "svd",
    title: "SVD matching",
    label: "SVD recommendation engine",
    detail: "Singular Value Decomposition surfaces testers by lived experience and problem context—not demographics alone.",
    Icon: BarChart3,
    caseStudyColumn: "backend",
  },
  {
    id: "openai",
    title: "Fine-tuned LLM",
    label: "Fine-tuned LLM + LangChain agents",
    detail: "Post-interview insight extraction, theme synthesis, and nudges when questions skew leading or biased.",
    Icon: SiOpenai,
    caseStudyColumn: "backend",
  },
  {
    id: "research",
    title: "Discovery research",
    label: "Primary research + competition",
    detail: "20 founder interviews, competitive matrix, and MedTech beachhead sizing informed the product and pitch.",
    Icon: ClipboardList,
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

const VAGALTONE_STACK: StackItem[] = [
  {
    id: "shape",
    title: "Platform",
    label: "Browser research portal",
    detail: "Short music-guided breathing sessions with pre/post self-report as the study instrument.",
    Icon: Layers,
    caseStudyColumn: "overview",
  },
  {
    id: "next",
    title: "Next.js",
    label: "Next.js + React",
    detail: "App Router UI for landing, check-in, breath session, and reflection.",
    Icon: SiNextdotjs,
    caseStudyColumn: "frontend",
  },
  {
    id: "react",
    title: "React",
    label: "React",
    detail: "Interactive breathing visual and session state transitions.",
    Icon: SiReact,
    caseStudyColumn: "frontend",
  },
  {
    id: "tailwind",
    title: "Tailwind",
    label: "Tailwind CSS",
    detail: "Clean, minimal session UI for a few-minute flow.",
    Icon: SiTailwindcss,
    caseStudyColumn: "frontend",
  },
  {
    id: "ts",
    title: "TypeScript",
    label: "TypeScript",
    detail: "Typed session and Likert response shapes.",
    Icon: SiTypescript,
    caseStudyColumn: "frontend",
  },
  {
    id: "audio",
    title: "Web Audio",
    label: "Web Audio API",
    detail: "Browser-generated tones synced to inhale/exhale pacing.",
    Icon: HeartPulse,
    caseStudyColumn: "backend",
  },
  {
    id: "supabase",
    title: "Supabase",
    label: "Supabase",
    detail: "Anonymous pre/post questionnaire capture (~83 responses).",
    Icon: SiSupabase,
    caseStudyColumn: "backend",
  },
  {
    id: "research",
    title: "INF 172",
    label: "Music & Health research",
    detail: "Frisson / vagal-tone literature; claims framed as emotional regulation, not medical VNS.",
    Icon: GraduationCap,
    caseStudyColumn: "backend",
  },
];

const BY_SLUG: Partial<Record<string, StackItem[]>> = {
  stepladder: STEPLADDER_STACK,
  founderssuite: FOUNDERSUITE_STACK,
  "leidos-genai": LEIDOS_STACK,
  vagaltone: VAGALTONE_STACK,
};

/** Homepage card footer: 4–6 highlighted tools (no chevrons, no full-stack tile). */
const HOMEPAGE_STRIP_IDS: Partial<Record<string, string[]>> = {
  stepladder: ["next", "react", "ts", "supabase", "postgres", "docker"],
  founderssuite: ["react", "ts", "tailwind", "postgres", "svd", "openai"],
  "leidos-genai": ["next", "react", "ts", "supabase", "openai", "postgres"],
  vagaltone: ["next", "react", "tailwind", "supabase", "audio"],
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

  const leftHeader = "Frontend";
  const rightHeader = "Backend";

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
