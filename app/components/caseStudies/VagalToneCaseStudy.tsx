"use client";

import type { Project } from "../../lib/projects";
import ScreenDemo from "../home/ScreenDemo";
import CaseStudyShell, { CaseStudyBullets, CaseStudySection } from "./CaseStudyShell";
import { CaseStudyStack, CaseStudyUml } from "./CaseStudyTech";

interface VagalToneCaseStudyProps {
  project: Project;
}

const FLOW_UML = `User                    Next.js / Zustand              Web Audio           Supabase
 │                              │                          │                   │
 │  open /                      │                          │                   │
 │─────────────────────────────▶│  landing                 │                   │
 │                              │                          │                   │
 │  submit pre Likert           │                          │                   │
 │─────────────────────────────▶│  store session state     │                   │
 │                              │──────────────────────────┼──────────────────▶│
 │                              │                          │                   │
 │  start breath (3 min)        │  expand/contract visual  │                   │
 │─────────────────────────────▶│─────────────────────────▶│  tone sync        │
 │◀──── inhale / exhale cues ───│◀─────────────────────────│                   │
 │                              │                          │                   │
 │  submit post Likert          │                          │                   │
 │─────────────────────────────▶│  write anonymous row     │                   │
 │                              │─────────────────────────────────────────────▶│
 │◀──── reflection / thanks ────│                          │                   │`;

const STATE_UML = `«state machine» Session
  [*] --> Landing
  Landing --> PreCheckin : start
  PreCheckin --> Breathing : Likert.valid
  Breathing --> PostCheckin : t >= 180s
  PostCheckin --> Done : Likert.valid
  Done --> [*]

Breathing:
  tick() → visual.scale + AudioContext oscillator
  Zustand: phase ∈ {inhale, exhale}`;

export default function VagalToneCaseStudy({ project }: VagalToneCaseStudyProps) {
  return (
    <CaseStudyShell
      project={project}
      lead="Browser-based music-guided breathing that explores emotional self-regulation through vagus nerve stimulation principles—built for INF 172 Music and Health."
      meta={[
        { label: "Role", value: "Aaron, Angie, Chunze" },
        { label: "Data", value: "~83 session responses" },
      ]}
    >
      <section className="mx-auto mb-16 max-w-3xl px-6 md:mb-20">
        <ScreenDemo src="/172.mp4" />
      </section>

      <CaseStudySection title="Problem">
        <p className="text-base leading-relaxed text-neutral-300 md:text-lg">
          College students often lack access to invasive or resource-heavy therapies. Consumer wellness apps
          treat music as passive background; few design for frisson or connect subjective calm to vagal-tone
          ideas in a short, self-serve session.
        </p>
      </CaseStudySection>

      <CaseStudySection title="Architecture">
        <CaseStudyUml title="Session sequence" diagram={FLOW_UML} />
        <div className="mt-6">
          <CaseStudyUml title="Client state" diagram={STATE_UML} />
        </div>
      </CaseStudySection>

      <CaseStudySection title="Stack">
        <CaseStudyStack slug={project.slug} />
      </CaseStudySection>

      <CaseStudySection title="What we built">
        <CaseStudyBullets
          items={[
            <>
              End-to-end flow: landing → pre-session Likert → three-minute guided breath → post reflection
            </>,
            <>
              Expanding/contracting visual + <code className="text-neutral-200">AudioContext</code> tones
              phase-locked to inhale/exhale
            </>,
            <>
              Zustand for session phase; anonymous pre/post rows (calmness, tension, breathing stability) in
              Supabase
            </>,
            <>Claims framed as emotional regulation research—not biometric VNS</>,
          ]}
        />
      </CaseStudySection>

      <CaseStudySection title="Outcome">
        <p className="text-base leading-relaxed text-neutral-300 md:text-lg">
          ~83 data points suggest short music-guided sessions can feel regulating as a low-barrier complement
          to care. Limits: Likert-only (no HRV), fixed frequencies. Next: wearable biofeedback, personalized
          music, longitudinal tracking.
        </p>
      </CaseStudySection>
    </CaseStudyShell>
  );
}
