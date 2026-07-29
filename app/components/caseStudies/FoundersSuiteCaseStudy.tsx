"use client";

import type { Project } from "../../lib/projects";
import ScreenDemo from "../home/ScreenDemo";
import CaseStudyShell, { CaseStudyBullets, CaseStudySection } from "./CaseStudyShell";
import { CaseStudyStack, CaseStudyUml } from "./CaseStudyTech";

interface FoundersSuiteCaseStudyProps {
  project: Project;
}

const MATCH_UML = `Founder                 Matcher Service              Tester
   │                          │                         │
   │  POST /match             │                         │
   │  {domain, needs}         │                         │
   │─────────────────────────▶│  SVD(founder, testers)  │
   │                          │  rank by experience     │
   │◀──── ranked feed ────────│                         │
   │                          │                         │
   │  accept candidate        │  invite                 │
   │─────────────────────────▶│────────────────────────▶│
   │                          │◀──── accept / decline ──│
   │                          │                         │
   │◀──── booked session ─────│                         │
   │                          │                         │
   │  conversation done       │  LangChain agents       │
   │─────────────────────────▶│  extract + bias check   │
   │◀──── insight summary ────│                         │`;

const COMP_UML = `┌─────────────────────────────────────────────────────┐
│                    React SPA                        │
│  Founder dash │ Matcher feed │ Tester feed │ Board  │
└─────────────┬───────────────────────┬───────────────┘
              │                       │
              ▼                       ▼
     ┌─────────────────┐     ┌─────────────────┐
     │  SQL / profiles │     │  SVD engine     │
     │  bookings       │     │  domain weights │
     └────────┬────────┘     └────────┬────────┘
              │                       │
              └───────────┬───────────┘
                          ▼
                 ┌─────────────────┐
                 │  LangChain      │
                 │  insight + bias │
                 └─────────────────┘`;

export default function FoundersSuiteCaseStudy({ project }: FoundersSuiteCaseStudyProps) {
  return (
    <CaseStudyShell
      project={project}
      lead="B2B discovery marketplace matching early-stage founders with domain-credible end users—then turning conversations into investor-ready insight."
      meta={[
        { label: "Role", value: "Beall-Butterworth" },
        { label: "Proof", value: "Stella Zhang NVC" },
      ]}
    >
      <section className="mx-auto mb-16 max-w-3xl px-6 md:mb-20">
        <ScreenDemo src="/fs-demo.mp4" />
      </section>

      <CaseStudySection title="Problem">
        <p className="text-base leading-relaxed text-neutral-300 md:text-lg">
          Founders need real B2B signal before MVP, but cold outreach converts poorly and warm networks skew
          positive. In our research, <strong className="text-white">all 20 founders</strong> interviewed still used
          personal networks for validation despite knowing the bias—the Mom Test failure mode in practice.
        </p>
      </CaseStudySection>

      <CaseStudySection title="Architecture">
        <CaseStudyUml title="Match → converse → synthesize" diagram={MATCH_UML} />
        <div className="mt-6">
          <CaseStudyUml title="Component view" diagram={COMP_UML} />
        </div>
      </CaseStudySection>

      <CaseStudySection title="Stack">
        <CaseStudyStack slug={project.slug} />
      </CaseStudySection>

      <CaseStudySection title="What we built">
        <CaseStudyBullets
          items={[
            <>
              SVD recommender over lived experience + problem context (MedTech-weighted), not demographics alone
            </>,
            <>Two-sided React app: onboarding, swipe-style review, community board</>,
            <>
              Post-round LangChain pipeline: theme extraction, WTP signals, leading-question bias nudges
            </>,
            <>
              Demand: <strong className="text-white">85%</strong> would use it;{" "}
              <strong className="text-white">65%</strong> called existing tools unreliable
            </>,
          ]}
        />
      </CaseStudySection>

      <CaseStudySection title="Outcome">
        <p className="text-base leading-relaxed text-neutral-300 md:text-lg">
          Working two-sided flow for Beall Butterworth; same narrative carried into Stella Zhang NVC. The product
          lives or dies on match quality—panels are easy to copy; domain-tuned experience graphs are not.
        </p>
      </CaseStudySection>
    </CaseStudyShell>
  );
}
