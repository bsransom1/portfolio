"use client";

import type { Project } from "../../lib/projects";
import ScreenDemo from "../home/ScreenDemo";
import CaseStudyShell, { CaseStudyBullets, CaseStudySection } from "./CaseStudyShell";
import { CaseStudyStack, CaseStudyUml } from "./CaseStudyTech";

interface LeidosCaseStudyProps {
  project: Project;
}

const PIPELINE_UML = `┌──────────┐    ┌──────────────┐    ┌────────────────┐
│  Client  │───▶│  Next.js API │───▶│  PDF / OCR     │
│  Editor  │    │  Route Hdlrs │    │  extractor     │
└────┬─────┘    └──────┬───────┘    └───────┬────────┘
     │                 │                    │
     │                 ▼                    ▼
     │          ┌──────────────┐    ┌────────────────┐
     │          │  Req. miner  │◀───│  Text + spans  │
     │          │  shall/must  │    └────────────────┘
     │          └──────┬───────┘
     │                 │
     │                 ▼
     │          ┌──────────────┐    ┌────────────────┐
     │          │  RAG library │───▶│  Org context   │
     │          │  embeddings  │    │  + policies    │
     │          └──────┬───────┘    └────────────────┘
     │                 │
     │                 ▼
     │          ┌──────────────┐
     │          │ Claude API   │  schema-bound JSON
     │          │ + confidence │
     │          └──────┬───────┘
     │                 │
     ▼                 ▼
┌──────────────────────────────────┐
│  Draft blocks + RBAC workspace   │
│  Viewer │ Editor │ Admin         │
└──────────────────────────────────┘`;

const RBAC_UML = `«enumeration» Role
  Viewer
  Editor
  Admin

Viewer ──view──▶ Proposal, Dashboard
Editor ──edit──▶ Upload, Generate, RAG lib
Admin  ──admin─▶ Capital, Users, All Editor`;

export default function LeidosCaseStudy({ project }: LeidosCaseStudyProps) {
  return (
    <CaseStudyShell
      project={project}
      lead="GenAI workspace that turns government BAAs and RFPs into mined requirements and drafted proposal sections—built with Leidos and DARPA I2O."
      meta={[
        { label: "Role", value: "Frontend · prompts · writing" },
        { label: "Team", value: "6-person capstone" },
      ]}
    >
      <section className="mx-auto mb-16 max-w-3xl px-6 md:mb-20">
        <ScreenDemo src="/v1.mp4" />
      </section>

      <CaseStudySection title="Problem">
        <p className="text-base leading-relaxed text-neutral-300 md:text-lg">
          Proposal teams spend weeks manually parsing dense solicitations. Missed{" "}
          <span className="font-mono text-sm text-amber-200/90">SHALL</span> /{" "}
          <span className="font-mono text-sm text-amber-200/90">MUST</span> language
          risks disqualification; handoffs live in spreadsheets and email.
        </p>
      </CaseStudySection>

      <CaseStudySection title="Architecture">
        <CaseStudyUml title="Ingest → generate pipeline" diagram={PIPELINE_UML} />
        <div className="mt-6">
          <CaseStudyUml title="RBAC" diagram={RBAC_UML} />
        </div>
      </CaseStudySection>

      <CaseStudySection title="Stack">
        <CaseStudyStack slug={project.slug} />
      </CaseStudySection>

      <CaseStudySection title="What we built">
        <CaseStudyBullets
          items={[
            <>
              PDF ingest with OCR fallback → modal-verb requirement mining → org-context RAG → Claude drafts with
              per-block confidence
            </>,
            <>Grammarly-style highlighting for prescriptive language in the editor</>,
            <>Typed API contracts for generation payloads; Viewer / Editor / Admin fail-closed permissions</>,
            <>Dashboard KPIs: pipeline health and avg. confidence tracked at 73%</>,
          ]}
        />
      </CaseStudySection>

      <CaseStudySection title="Outcome">
        <CaseStudyBullets
          items={[
            <>End-to-end upload-to-draft prototype demoed to Leidos stakeholders</>,
            <>Shipped without a live BAA corpus—synthetic libraries, tight prompt contracts, explicit confidence labeling</>,
            <>My focus: frontend requirement UX, prompt tuning, and stakeholder-facing writeups</>,
          ]}
        />
      </CaseStudySection>
    </CaseStudyShell>
  );
}
