"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Footer from "../layout/Footer";
import type { Project } from "../../lib/projects";
import CaseStudyTechStack from "./CaseStudyTechStack";

interface StepLadderCaseStudyProps {
  project: Project;
}

export default function StepLadderCaseStudy({ project }: StepLadderCaseStudyProps) {
  return (
    <main className="min-h-screen bg-transparent">
      {/* Breadcrumb */}
      <div className="pt-8 pb-8 px-6 max-w-7xl mx-auto md:pt-10">
        <Link 
          href="/#work" 
          className="text-sm text-gray-500 hover:text-black transition-colors inline-flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Work
        </Link>
      </div>

      {/* Hero */}
      <section className="px-6 max-w-4xl mx-auto mb-24">
        <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">{project.type}</p>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-black mb-6 leading-tight">
          {project.title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-6 leading-relaxed max-w-3xl">
          A therapist-facing operating system for structured, between-session work.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl border-l-4 border-gray-300 pl-6">
          StepLadder turns therapy homework from vague suggestions into structured, measurable behavior change.
        </p>
        <CaseStudyTechStack slug={project.slug} accentColor={project.color} />
      </section>

      {/* What it is */}
      <section className="px-6 max-w-4xl mx-auto mb-24">
        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-8">What StepLadder does</h2>
        <ul className="space-y-4 text-lg text-gray-700 leading-relaxed">
          <li className="flex gap-3">
            <span className="text-gray-400 font-mono text-sm mt-1 shrink-0">→</span>
            <span>Therapists assign <strong className="text-black">scientifically grounded worksheets</strong> (CBT, DBT, ERP, ACT, and related modalities).</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 font-mono text-sm mt-1 shrink-0">→</span>
            <span>Patients complete assignments in a <strong className="text-black">guided, structured interface</strong>, not ad hoc PDFs or generic notes apps.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 font-mono text-sm mt-1 shrink-0">→</span>
            <span>The system captures <strong className="text-black">behavioral and emotional data</strong>—for example SUDS, completion, and patterns over time.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 font-mono text-sm mt-1 shrink-0">→</span>
            <span>Therapists receive <strong className="text-black">clean, actionable feedback</strong> before the next session.</span>
          </li>
        </ul>

        <div className="mt-10 grid md:grid-cols-2 gap-6 text-base">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
            <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">Typical model</p>
            <p className="text-gray-800 font-medium">1 hour session → nothing structured → next session</p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
            <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">With StepLadder</p>
            <p className="text-gray-800 font-medium">1 hour session → guided work → measurable progress → higher-leverage next session</p>
          </div>
        </div>
      </section>

      {/* Core problem */}
      <section className="px-6 max-w-4xl mx-auto mb-24">
        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-8">The core problem</h2>
        <p className="text-lg text-gray-900 font-medium mb-6">
          Therapy does not fail in-session. It fails between sessions.
        </p>
        <div className="space-y-5 text-lg text-gray-700 leading-relaxed">
          <p>
            Homework is often assigned verbally or as a PDF. In practice, patients forget it, avoid it, or complete it incorrectly. The following week, clinicians are left with subjective recall: &ldquo;Did you do the homework?&rdquo; &ldquo;Kind of.&rdquo;
          </p>
          <p className="text-gray-900 font-medium">That gap implies:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>No reliable data on what actually happened</li>
            <li>Weak accountability between sessions</li>
            <li>Little room to iterate the treatment plan on evidence</li>
          </ul>
        </div>
      </section>

      {/* Insight */}
      <section className="px-6 max-w-4xl mx-auto mb-24">
        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-8">Design insight</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Therapy is behavior change. Behavior change depends on <strong className="text-black">structured repetition and feedback</strong>. Today, that loop is often broken outside the room.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          StepLadder is built to close the loop by turning homework into <strong className="text-black">structured workflows</strong> (not vague tasks), <strong className="text-black">trackable behaviors</strong> (not only self-report in session), and <strong className="text-black">feedback systems</strong> clinicians can use before the next appointment.
        </p>
      </section>

      {/* Differentiation */}
      <section className="px-6 max-w-4xl mx-auto mb-24">
        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-8">Differentiation</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Many products operate as content libraries, static worksheet repositories, or documentation helpers. The patient experience can reduce to: receive a file, complete it wherever, little visibility for the clinician.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          StepLadder is oriented as <strong className="text-black">execution infrastructure</strong>: define an intervention, guide the patient through it, capture execution, and surface outcomes—not only &ldquo;assign worksheet.&rdquo;
        </p>
        <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
          <p className="text-sm text-gray-500 uppercase tracking-wide mb-3">Contrast</p>
          <p className="text-gray-700 mb-4"><span className="text-gray-900 font-medium">Libraries:</span> Here is material; good luck.</p>
          <p className="text-gray-700"><span className="text-gray-900 font-medium">StepLadder:</span> Assign → patient executes in-product → system records data → therapist reviews → next session targets real gaps.</p>
        </div>
      </section>

      {/* Behavioral loop */}
      <section className="px-6 max-w-4xl mx-auto mb-24">
        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-8">The between-session loop</h2>
        <ol className="space-y-6 text-lg text-gray-700 leading-relaxed list-decimal list-inside">
          <li className="pl-2">
            <span className="font-semibold text-black">Therapist assigns a structured intervention.</span> Modality-specific, not generic busywork.
          </li>
          <li className="pl-2">
            <span className="font-semibold text-black">Patient executes in the real world.</span> Step-by-step guidance, minimal friction versus paper or unstructured apps.
          </li>
          <li className="pl-2">
            <span className="font-semibold text-black">The system captures data.</span> Emotional signals (e.g. SUDS), behavioral signals (completion, avoidance, rituals where relevant).
          </li>
          <li className="pl-2">
            <span className="font-semibold text-black">Therapist reviews before session.</span> What worked, where drop-off occurred, what to adjust.
          </li>
          <li className="pl-2">
            <span className="font-semibold text-black">The next session is evidence-informed.</span> Less guesswork, more iteration on what the data show.
          </li>
        </ol>
      </section>

      {/* Naming */}
      <section className="px-6 max-w-4xl mx-auto mb-24">
        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-8">Why &ldquo;StepLadder&rdquo;</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          The product treats therapy as incremental, progressive steps: climbing difficulty hierarchies, sequencing skills, and making visible where a patient is stuck versus ready to advance.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          That maps directly to how <strong className="text-black">ERP</strong> uses exposure hierarchies, how <strong className="text-black">CBT</strong> sequences cognitive work, and how <strong className="text-black">DBT</strong> builds capability over time. The name encodes the interaction model, not just branding.
        </p>
      </section>

      {/* Optimization target */}
      <section className="px-6 max-w-4xl mx-auto mb-24">
        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-8">What StepLadder optimizes for</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Not engagement metrics, journaling for its own sake, or a vague &ldquo;feel better&rdquo; promise. The wedge is sharper: <strong className="text-black">adherence and correct execution of clinical homework</strong>, with signals clinicians can trust.
        </p>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 space-y-4 text-gray-700">
          <p><strong className="text-black">Source of truth for progress</strong> — Grounded in behavioral traces, not only memory or recap in session.</p>
          <p><strong className="text-black">Workflow engine</strong> — Assign, execute, review, iterate as a connected system.</p>
          <p><strong className="text-black">Bridge between session and life</strong> — Where treatment plans meet everyday behavior.</p>
        </div>
      </section>

      {/* Strategic framing */}
      <section className="px-6 max-w-4xl mx-auto mb-24">
        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-8">Strategic framing</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          The layer between appointment and outcome is still under-built in digital mental health. StepLadder targets that layer explicitly: the system that helps therapy <strong className="text-black">work outside the room</strong>, not only document what happened inside it.
        </p>
      </section>

      {/* Product & ethics */}
      <section className="px-6 max-w-4xl mx-auto mb-24">
        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-8">Product stance</h2>
        <div className="space-y-5 text-lg text-gray-700 leading-relaxed">
          <p>
            Design choices prioritize clinical clarity, patient safety, and appropriate scope: StepLadder supports the therapeutic relationship—it does not replace licensed care or emergency services.
          </p>
          <p>
            Technical implementation favors a web-based, responsive stack so assignments can be completed where patients already are, with privacy and security treated as foundational rather than bolt-on.
          </p>
        </div>
      </section>

      {/* Product Demo */}
      <section className="px-6 max-w-4xl mx-auto mb-24">
        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-8">Product demo</h2>
        <div className="relative w-full bg-[#FDFBF6] rounded-lg overflow-hidden shadow-[0_12px_48px_rgba(0,0,0,0.15)]">
          <div className="bg-[#F5F5F5] border-b border-gray-200">
            <div className="flex items-center gap-2 p-3">
              <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <div className="w-3 h-3 rounded-full bg-[#28CA42]" />
            </div>
            <div className="px-4 pb-3">
              <div className="flex items-center gap-2 bg-white rounded-md px-4 py-2 border border-gray-200">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className="text-sm text-gray-600 flex-1">stepladder.dev</span>
                <div className="flex gap-1">
                  <div className="w-1 h-1 rounded-full bg-gray-400" />
                  <div className="w-1 h-1 rounded-full bg-gray-400" />
                  <div className="w-1 h-1 rounded-full bg-gray-400" />
                </div>
              </div>
            </div>
          </div>
          <div className="relative bg-[#FDFBF6]">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto"
            >
              <source src="/videos/stepladder.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
