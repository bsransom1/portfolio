"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Project } from "../../lib/projects";
import {
  getProjectTitleMark,
  projectHeroTitleMarkImgClass,
  projectLeidosTitleRestClass,
} from "../../lib/projectMeta";
import Footer from "../layout/Footer";
import BrowserDemoShell from "../feed/BrowserDemoShell";
import CaseStudyTechStack from "./CaseStudyTechStack";

interface LeidosCaseStudyProps {
  project: Project;
}

const statBar = ["8 use cases", "6-person team", "Anthropic Claude API", "DARPA I2O"];

export default function LeidosCaseStudy({ project }: LeidosCaseStudyProps) {
  const titleMark = getProjectTitleMark(project.slug, project.title);
  return (
    <main className="min-h-screen bg-transparent">
      <div className="pt-8 pb-8 px-6 max-w-7xl mx-auto md:pt-10">
        <Link
          href="/#work"
          className="text-sm text-gray-500 hover:text-black transition-colors inline-flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Work
        </Link>
      </div>

      <section className="px-6 max-w-4xl mx-auto mb-24">
        <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">
          {project.type} · Industry partner: Leidos
        </p>
        <h1
          aria-label={project.title}
          className="text-5xl md:text-6xl lg:text-7xl font-semibold text-black mb-6 leading-tight"
        >
          {titleMark.mode === "inline" ? (
            <span className="inline-flex flex-wrap items-center gap-x-2 md:gap-x-3">
              <img
                src={titleMark.src}
                alt=""
                className={projectHeroTitleMarkImgClass(project.slug)}
                decoding="async"
              />
              {titleMark.rest ? (
                <span className={projectLeidosTitleRestClass(project.slug)}>{titleMark.rest}</span>
              ) : null}
            </span>
          ) : (
            project.title
          )}
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-6 leading-relaxed max-w-3xl">
          Full-stack web application that uses generative AI to automate the breakdown of complex government BAAs and RFPs—parsing PDFs,
          surfacing <ReqBadge text="SHALL" /> <ReqBadge text="MUST" /> <ReqBadge text="REQUIRED" /> requirements, and drafting structured proposal frameworks.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl border-l-4 border-gray-300 pl-6 mb-8">
          Built with Leidos in collaboration with DARPA&apos;s Information Innovation Office (I2O), with a six-person team shipping parsing,
          RAG-backed generation, and role-based workflows for real proposal cycles.
        </p>
        <div className="rounded-lg border border-gray-200 bg-white px-4 py-3 text-center text-sm text-gray-700 shadow-sm">
          {statBar.join(" · ")}
        </div>
        <dl className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <Meta label="Role" value="Frontend, ML prompts, writing" />
          <Meta label="Timeline" value="Sept '25 – Mar '26" />
          <Meta label="Stack" value="PDF/OCR, RAG, Claude API, RBAC" />
          <Meta label="Context" value="DARPA BAA HR001126S0001 (I2O)" color={project.color} />
        </dl>
        <CaseStudyTechStack slug={project.slug} accentColor={project.color} />
      </section>

      <section className="px-6 max-w-4xl mx-auto mb-24">
        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-8">Problem</h2>
        <div className="space-y-5 text-lg text-gray-700 leading-relaxed">
          <p>
            Broad Agency Announcements and RFPs are dense, interleaved, and version-heavy. Proposal teams spend weeks manually parsing
            documents to extract obligations, often under fixed schedules where a missed &ldquo;shall&rdquo; can disqualify a bid or force a costly rework.
          </p>
          <p>
            The cost is not only time: inconsistent interpretation across contributors, error-heavy handoffs between capture and technical
            volume leads, and deadlines that slip because requirement matrices are still maintained in spreadsheets and email threads.
          </p>
        </div>
      </section>

      <section className="px-6 max-w-4xl mx-auto mb-24">
        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-8">Solution overview</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6 max-w-3xl">
          An AI-assisted platform ingests solicitation PDFs, mines prescriptive language, enriches generation with organizational and library
          context, and produces structured proposal artifacts—while exposing confidence scores so teams know what to validate first.
        </p>
        <ul className="space-y-4 text-lg text-gray-700 leading-relaxed">
          {[
            "Upload and normalize BAA/RFP PDFs with OCR fallback for poor scans",
            "Flag and cluster requirements driven by modal verbs and compliance phrasing",
            "Inject org-specific context via a RAG document library",
            "Generate proposal sections through the Anthropic Claude API with schema-bound outputs",
            "Dashboard KPIs: proposals, awarded, in-review, active, at-risk, avg. confidence (tracked at 73%)",
          ].map((item) => (
            <li key={item} className="flex gap-3">
              <span className="text-gray-400 font-mono text-sm mt-1 shrink-0">→</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="px-6 max-w-4xl mx-auto mb-24">
        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-8">My role</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          <strong className="text-black">Brady Ransom</strong> — front-end development, model training and prompt engineering, and writing for stakeholder-facing
          materials. I helped ship the Grammarly-style requirement-highlighting experience, tuned extraction prompts against synthetic BAAs, and wired the
          generation flow so editors could go from parsed requirements to draft sections without leaving the workspace.
        </p>
      </section>

      <section className="px-6 max-w-4xl mx-auto mb-24">
        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-8">Technical architecture</h2>
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 md:p-8 font-mono text-sm text-gray-800 leading-loose overflow-x-auto">
          <pre className="whitespace-pre-wrap">
            {`PDF upload  →  text + structure extraction (OCR fallback)
     →  requirement mining (shall / must / required + context windows)
     →  org context injection (RAG library + policy snippets)
     →  Claude API (structured prompts, schema-validated JSON where applicable)
     →  proposal draft assembly + confidence scoring per block
     →  dashboard + RBAC (Viewer / Editor / Admin)`}
          </pre>
        </div>
      </section>

      <section className="px-6 max-w-4xl mx-auto mb-24">
        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-8">Key features · 8 use cases</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            { title: "Upload BAA / RFP", body: "Ingest PDFs, recover text from scans, version artifacts." },
            { title: "Inject org context", body: "Attach corporate assets and past performance into RAG slots." },
            { title: "Review & validate", body: "Human-in-the-loop edits on mined requirements and drafts." },
            { title: "Execution plan", body: "Post-award milestone scaffolding tied to program phases." },
            { title: "Multi-org collaboration", body: "Shared workspaces with permission-aware visibility." },
            { title: "Capital management", body: "Admin workflows for allocation views and thresholds." },
            { title: "Timeline view", body: "Cross-program schedule overlays and status lanes." },
            { title: "Confidence analytics", body: "Aggregate scoring; spotlight blocks under review threshold." },
          ].map((uc, i) => (
            <div
              key={uc.title}
              className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition-colors hover:border-gray-300"
            >
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">Use case {String(i + 1).padStart(2, "0")}</p>
              <h3 className="text-black font-semibold mb-2">{uc.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{uc.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 max-w-4xl mx-auto mb-24">
        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-8">Design process</h2>
        <p className="text-lg text-gray-700 mb-8 max-w-3xl leading-relaxed">
          We started from a role matrix—who can upload, who can spend, who can only read—and designed the dashboard and editor flows so permissions failed closed.
          Low-fidelity wireframes focused on the capture → generate → validate loop before visual polish.
        </p>
        <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-3">Role / permissions matrix</h3>
        <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white shadow-sm">
          <table className="w-full text-sm text-left min-w-[600px]">
            <thead>
              <tr className="bg-gray-100 text-gray-900">
                <th className="px-4 py-3 font-semibold">Capability</th>
                <th className="px-4 py-3 font-semibold">Viewer</th>
                <th className="px-4 py-3 font-semibold">Editor</th>
                <th className="px-4 py-3 font-semibold">Admin</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-gray-700">
              {[
                ["View proposals & dashboards", "View", "View", "View"],
                ["Upload BAAs / RFPs", "—", "Edit", "Edit"],
                ["Run AI generation", "—", "Edit", "Edit"],
                ["Edit org RAG library", "—", "Edit", "Edit"],
                ["Capital allocation & user admin", "—", "—", "Admin"],
              ].map(([cap, v, e, a]) => (
                <tr key={cap as string}>
                  <td className="px-4 py-3 text-gray-900 font-medium">{cap}</td>
                  <td className="px-4 py-3 font-mono text-xs">{v}</td>
                  <td className="px-4 py-3 font-mono text-xs">{e}</td>
                  <td className="px-4 py-3 font-mono text-xs font-semibold" style={{ color: project.color }}>
                    {a}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="px-6 max-w-4xl mx-auto mb-24">
        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-8">Product demo</h2>
        <p className="text-sm text-gray-600 mb-6 max-w-2xl leading-relaxed">
          Screen recording in the same Mac-style browser chrome used on the homepage feed.
        </p>
        <BrowserDemoShell
          hostname="workspace.leidos-genai.internal — BAA HR001126S0001"
          videoSrc="/v1.mp4"
          contentBg="#FDFBF6"
        />
      </section>

      <section className="px-6 max-w-4xl mx-auto mb-24">
        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-8">Team</h2>
        <p className="text-sm text-gray-500 uppercase tracking-wide mb-4">Six-person capstone team</p>
        <ul className="grid sm:grid-cols-2 gap-3 text-gray-700 text-base">
          <li>
            <strong className="text-black">Sammi Li</strong> — PM / UI
          </li>
          <li>
            <strong className="text-black">Athena Bui</strong> — Frontend / research
          </li>
          <li>
            <strong className="text-black">Abdul Bdaiwi</strong> — UI/UX
          </li>
          <li>
            <strong className="text-black">Brady Ransom</strong> — Frontend / ML
          </li>
          <li>
            <strong className="text-black">Matthew Monahan</strong> — Backend
          </li>
          <li>
            <strong className="text-black">Madison Min</strong> — Frontend / design
          </li>
        </ul>
      </section>

      <section className="px-6 max-w-4xl mx-auto mb-24">
        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-8">Challenges & learnings</h2>
        <ul className="space-y-4 text-lg text-gray-700 leading-relaxed">
          <li>
            <strong className="text-black">Jira noise:</strong> tickets often lacked the systems context needed to sequence PDF/OCR edge cases; we compensated
            with shared decision logs tied to each sprint demo.
          </li>
          <li>
            <strong className="text-black">Stakeholder shifts:</strong> mid-project additions to post-award views forced us to freeze an MVP slice for Leidos
            review while stubbing capital dashboards.
          </li>
          <li>
            <strong className="text-black">No live BAA corpus:</strong> we combined synthetic solicitations with a curated RAG library and a fine-tuned Anthropic
            workflow key, explicitly labeling confidence so reviewers knew where hallucination risk clustered.
          </li>
          <li>
            <strong className="text-black">Escalation gaps:</strong> clearer &ldquo;blocker SLAs&rdquo; between our team and Leidos PMs would have shaved integration risk
            earlier.
          </li>
        </ul>
      </section>

      <section className="px-6 max-w-4xl mx-auto mb-24">
        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-8">Outcomes / impact</h2>
        <ul className="space-y-4 text-lg text-gray-700 leading-relaxed">
          <li className="flex gap-3">
            <span className="text-gray-400 font-mono text-sm mt-1 shrink-0">→</span>
            <span>Functional dashboard prototype with KPIs (totals, awarded, in-review, active, at-risk, avg. confidence 73%)</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 font-mono text-sm mt-1 shrink-0">→</span>
            <span>End-to-end AI pipeline from upload to scored draft blocks</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 font-mono text-sm mt-1 shrink-0">→</span>
            <span>Role-based access control aligned to Viewer / Editor / Admin personas</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 font-mono text-sm mt-1 shrink-0">→</span>
            <span>Presentation-ready demo to Leidos stakeholders</span>
          </li>
        </ul>
      </section>

      <section className="px-6 max-w-4xl mx-auto mb-24">
        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-8">Next steps</h2>
        <ul className="space-y-3 text-lg text-gray-700 leading-relaxed max-w-3xl">
          <li>Promote PM-facing UI from static mockups into a clickable staging prototype aligned with engineering components.</li>
          <li>Expand the RAG library with cleared exemplars as they become available under partner guidance.</li>
          <li>Plan for full C3PAO CMMC compliance integration alongside enterprise identity and audit trails.</li>
        </ul>
      </section>

      <Footer />
    </main>
  );
}

function ReqBadge({ text }: { text: string }) {
  return (
    <span className="align-middle inline-flex items-center rounded border border-amber-700/35 bg-amber-50 px-1.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wide text-amber-950 mx-0.5">
      {text}
    </span>
  );
}

function Meta({ label, value, color }: { label: string; value: string; color?: string }) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-3 shadow-sm">
      <dt className="text-[10px] font-medium uppercase tracking-widest text-gray-500 mb-1">{label}</dt>
      <dd className="text-sm text-gray-800 leading-snug" style={color ? { color } : undefined}>
        {value}
      </dd>
    </div>
  );
}
