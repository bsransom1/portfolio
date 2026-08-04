"use client";

import type { Project } from "../../lib/projects";
import ScreenDemo from "../home/ScreenDemo";
import CaseStudyShell, { CaseStudyBullets, CaseStudySection } from "./CaseStudyShell";
import { CaseStudyStack, CaseStudyUml } from "./CaseStudyTech";

interface SwearchCaseStudyProps {
  project: Project;
}

const SYSTEM_UML = `┌─────────────────────┐     ┌──────────────────────┐
│  Chrome Extension   │     │   Next.js Web App    │
│  MV3 + React/Vite   │◄───►│   projects · auth    │
│  panel + sidebar    │     └──────────┬───────────┘
└──────────┬──────────┘                │
           │ chrome.identity / fetch   │ Supabase JS / SSR
           ▼                           ▼
┌──────────────────────────────────────────────────┐
│                   Supabase                        │
│  Auth · Postgres + RLS · Edge Functions (Claude) │
└──────────┬───────────────────────────┬───────────┘
           │                           │
           ▼                           ▼
    Google Drive/Docs API         Anthropic Claude
    (list / read / append)        (Edge Functions only)
           +
       OpenAlex (related papers)`;

const CAPTURE_UML = `Researcher          Extension (MV3)         Edge Function           Postgres
    │                     │                      │                     │
    │  select ≥20 chars   │                      │                     │
    │  context-menu act   │                      │                     │
    │────────────────────▶│  inject Shadow panel │                     │
    │                     │  restore session     │                     │
    │                     │─────────────────────▶│  Claude analyze     │
    │                     │◀──── structured JSON─│                     │
    │  Add to project     │                      │                     │
    │────────────────────▶│  JWT + highlight     │                     │
    │                     │───────────────────────────────────────────▶│
    │  Export to Doc      │  Docs API append     │                     │
    │────────────────────▶│  (export role Doc)   │                     │
    │◀──── done ──────────│                      │                     │`;

export default function SwearchCaseStudy({ project }: SwearchCaseStudyProps) {
  return (
    <CaseStudyShell
      project={project}
      lead="Research condensation for academics: highlight text on a paper in Chrome, get structured AI analysis scoped to your writing project, and append those notes into a linked Google Doc."
      meta={[
        { label: "Role", value: "Solo builder" },
        { label: "Status", value: "CWS MVP · v0.1.0" },
      ]}
    >
      <section className="mx-auto mb-16 max-w-3xl px-6 md:mb-20">
        <ScreenDemo src="/videos/swearch.mp4" />
      </section>

      <CaseStudySection title="Problem">
        <p className="text-base leading-relaxed text-neutral-300 md:text-lg">
          Researchers already live in two places: reading (arXiv, PubMed, journals) and writing (usually Google
          Docs). Most AI research tools optimize for understanding papers inside their own app. Swearch targets
          the gap between reading and drafting—capture a claim while reading, structure it against an active
          project, and land it in the Doc you&apos;re already writing.
        </p>
      </CaseStudySection>

      <CaseStudySection title="Architecture">
        <CaseStudyUml title="System view" diagram={SYSTEM_UML} />
        <div className="mt-6">
          <CaseStudyUml title="Capture → project → Doc" diagram={CAPTURE_UML} />
        </div>
      </CaseStudySection>

      <CaseStudySection title="Stack">
        <CaseStudyStack slug={project.slug} />
      </CaseStudySection>

      <CaseStudySection title="What we built">
        <CaseStudyBullets
          items={[
            <>
              Chrome MV3 extension: context menu (summarize, ask, relevance, claims, add, copy), selection
              Shadow DOM panel, and Chat / Project / Session sidebar
            </>,
            <>
              Project-scoped condensation—highlights, chat, and Doc links hang off the active{" "}
              <code className="text-neutral-200">research_project</code>, not a global chat blob
            </>,
            <>
              Google Docs loop: link with Context / Export / Both roles; sync caches Doc text for AI; export
              appends a formatted block via the Docs API
            </>,
            <>
              Hard constraints: Anthropic only on Edge Functions, dual Google OAuth clients,{" "}
              <code className="text-neutral-200">withAuthenticatedSession</code> restore on service-worker wake,
              on-demand injection (no passive scraping), RLS on every user table
            </>,
          ]}
        />
      </CaseStudySection>

      <CaseStudySection title="Outcome">
        <p className="text-base leading-relaxed text-neutral-300 md:text-lg">
          Ship-ready MVP for Chrome Web Store submission—privacy policy, packaging, and reviewer fixtures
          included. Docs today are link + cache for AI context + append-on-export, not a full co-writing editor;
          the north star is draft-linked research notes. Positioning stays narrow on purpose: SciSpace helps you
          understand papers; Swearch helps you grow the Google Doc you&apos;re writing.
        </p>
      </CaseStudySection>
    </CaseStudyShell>
  );
}
