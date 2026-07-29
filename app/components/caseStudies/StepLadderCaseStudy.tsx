"use client";

import type { Project } from "../../lib/projects";
import ScreenDemo from "../home/ScreenDemo";
import CaseStudyShell, { CaseStudyBullets, CaseStudySection } from "./CaseStudyShell";
import { CaseStudyStack, CaseStudyUml } from "./CaseStudyTech";

interface StepLadderCaseStudyProps {
  project: Project;
}

const SEQ_UML = `Therapist                 Next.js App                 Postgres
   │                           │                          │
   │  POST /assignments        │                          │
   │──────────────────────────▶│  INSERT assignment       │
   │                           │─────────────────────────▶│
   │                           │◀─────────────────────────│
   │◀──── 201 + id ────────────│                          │
   │                           │                          │
Patient                        │                          │
   │  GET /homework/:id        │                          │
   │──────────────────────────▶│  SELECT steps + schema   │
   │◀──── guided UI ───────────│◀─────────────────────────│
   │                           │                          │
   │  PATCH /progress          │  UPSERT SUDS / complete  │
   │──────────────────────────▶│─────────────────────────▶│
   │                           │                          │
Therapist                      │                          │
   │  GET /review/:patient     │  aggregate signals       │
   │──────────────────────────▶│─────────────────────────▶│
   │◀──── review payload ──────│◀─────────────────────────│`;

const DOMAIN_UML = `┌─────────────┐  1    *  ┌──────────────┐  1    *  ┌─────────────┐
│  Therapist  │─────────▶│  Assignment  │─────────▶│    Step     │
└─────────────┘          │  modality    │          │  prompt     │
                         │  patient_id  │          │  order      │
                         └──────┬───────┘          └──────┬──────┘
                                │ 1                       │ 1
                                │                         │
                                ▼ *                       ▼ *
                         ┌──────────────┐          ┌─────────────┐
                         │   Progress   │          │   Signal    │
                         │  status      │          │  SUDS / etc │
                         └──────────────┘          └─────────────┘`;

export default function StepLadderCaseStudy({ project }: StepLadderCaseStudyProps) {
  return (
    <CaseStudyShell
      project={project}
      lead="Therapist-facing tool for assigning structured between-session work and reviewing patient execution before the next appointment."
      meta={[{ label: "Role", value: "Founder · product + eng" }]}
    >
      <section className="mx-auto mb-16 max-w-3xl px-6 md:mb-20">
        <ScreenDemo src="/videos/stepladder.mp4" />
      </section>

      <CaseStudySection title="Problem">
        <p className="mb-4 text-base font-medium text-white md:text-lg">
          Therapy does not fail in-session. It fails between sessions.
        </p>
        <p className="text-base leading-relaxed text-neutral-300 md:text-lg">
          Homework is often verbal or a PDF. Patients forget it, avoid it, or complete it wrong—then clinicians
          get &ldquo;kind of&rdquo; instead of data. Content libraries hand out worksheets; they don&apos;t close the loop.
        </p>
      </CaseStudySection>

      <CaseStudySection title="Architecture">
        <CaseStudyUml title="Assign → execute → review sequence" diagram={SEQ_UML} />
        <div className="mt-6">
          <CaseStudyUml title="Domain model" diagram={DOMAIN_UML} />
        </div>
      </CaseStudySection>

      <CaseStudySection title="Stack">
        <CaseStudyStack slug={project.slug} />
      </CaseStudySection>

      <CaseStudySection title="What we built">
        <CaseStudyBullets
          items={[
            <>
              Shared TypeScript types for assignments/steps across App Router UI and route handlers
            </>,
            <>
              Guided patient runtime that posts behavioral + emotional signals (e.g. SUDS, completion)
            </>,
            <>
              Therapist review surface aggregating traces before the next session—not PDF dumps
            </>,
          ]}
        />
      </CaseStudySection>

      <CaseStudySection title="Outcome">
        <p className="text-base leading-relaxed text-neutral-300 md:text-lg">
          The wedge is adherence and correct execution outside the room—the layer where therapy often fails and
          where structured product design can matter most. Scope stays supportive of licensed care, not a
          replacement for it.
        </p>
      </CaseStudySection>
    </CaseStudyShell>
  );
}
