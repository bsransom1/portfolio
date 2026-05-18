"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Footer from "../layout/Footer";
import BrowserDemoShell from "../feed/BrowserDemoShell";
import type { Project } from "../../lib/projects";
import CaseStudyTechStack from "./CaseStudyTechStack";

interface FoundersSuiteCaseStudyProps {
  project: Project;
}

export default function FoundersSuiteCaseStudy({ project }: FoundersSuiteCaseStudyProps) {
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
        <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">{project.type}</p>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-black mb-6 leading-tight">{project.title}</h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-6 leading-relaxed max-w-3xl">
          A B2B end-user discovery marketplace that connects early-stage founders with domain-matched professionals for structured validation conversations.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl border-l-4 border-gray-300 pl-6">
          FoundersSuite replaces cold LinkedIn outreach and biased warm-network feedback with a centralized system that delivers real signals from real people—then turns each conversation into investor-ready insight.
        </p>
        <CaseStudyTechStack slug={project.slug} accentColor={project.color} />
      </section>

      <section className="px-6 max-w-4xl mx-auto mb-24">
        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-8">What FoundersSuite does</h2>
        <ul className="space-y-4 text-lg text-gray-700 leading-relaxed">
          <li className="flex gap-3">
            <span className="text-gray-400 font-mono text-sm mt-1 shrink-0">→</span>
            <span>
              Lets founders <strong className="text-black">book structured discovery conversations</strong> with domain-matched end users—clinicians, hospital professionals, SaaS buyers, industry practitioners—without cold outreach or research-panel fees.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 font-mono text-sm mt-1 shrink-0">→</span>
            <span>
              Delivers <strong className="text-black">AI-generated insight summaries</strong> after each round: pain-point patterns, willingness-to-pay signals, and feature priorities in a format ready for fundraising conversations.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 font-mono text-sm mt-1 shrink-0">→</span>
            <span>
              Hosts a <strong className="text-black">community discussion feed</strong> where end users share domain-specific problems and experiences—continuous signal beyond one-on-one calls.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 font-mono text-sm mt-1 shrink-0">→</span>
            <span>
              Helps teams build a <strong className="text-black">validated evidence base before launch or raise</strong>—grounded in research showing core themes can emerge from as few as six in-depth interviews when the right people are in the room.
            </span>
          </li>
        </ul>
        <div className="mt-10 grid md:grid-cols-2 gap-6 text-base">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
            <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">Typical validation path</p>
            <p className="text-gray-800 font-medium">
              Cold LinkedIn (5–10% response) or friends &amp; family (biased encouragement) → weak signal, wasted founder hours
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
            <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">With FoundersSuite</p>
            <p className="text-gray-800 font-medium">
              Match → structured conversation → AI summary → repeatable discovery loop before MVP
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 max-w-4xl mx-auto mb-24">
        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-8">The core problem</h2>
        <p className="text-lg text-gray-900 font-medium mb-6">
          Most startups fail because they build something no one wanted—not because they lacked engineering talent.
        </p>
        <div className="space-y-5 text-lg text-gray-700 leading-relaxed">
          <p>
            Industry data attribute a large share of startup failure to lack of market need; founders routinely overestimate IP value before product-market fit, burning years and capital on the wrong problem. In our primary research, <strong className="text-black">100% of 20 founders interviewed</strong> had relied on personal networks for validation despite knowing those conversations skew positive—exactly the failure mode documented in <em>The Mom Test</em>.
          </p>
          <p>
            The broken alternatives are symmetric: <strong className="text-black">cold outreach</strong> that yields single-digit response rates and hours of founder time per qualified contact, or <strong className="text-black">warm-network feedback</strong> that structurally overstates interest. Enterprise research panels exist, but they are priced and positioned for teams that already have budget—not for 2–8 person pre-MVP founders.
          </p>
          <p className="text-gray-900 font-medium">That gap shows up as:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>No affordable path to domain-credible B2B conversations</li>
            <li>Discovery tools that filter on demographics, not lived experience</li>
            <li>Insights trapped in call notes instead of investor-ready synthesis</li>
          </ul>
        </div>
      </section>

      <section className="px-6 max-w-4xl mx-auto mb-24">
        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-8">Design insight</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Customer discovery is not a survey—it is a <strong className="text-black">matching and trust problem</strong> first. The right five conversations with the right clinicians or buyers outweigh fifty generic interviews.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          FoundersSuite optimizes for <strong className="text-black">contextual fit</strong>: a MedTech founder needs clinicians with regulatory awareness, not any healthcare worker. Matching on problem domain, lived experience, and discovery needs—not demographics alone—is the product wedge competitors cannot copy without proprietary interaction data and domain tuning that compounds over time.
        </p>
      </section>

      <section className="px-6 max-w-4xl mx-auto mb-24">
        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-8">Differentiation</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Incumbents like BetaTesting, Applause, and Testlio target enterprise QA or broad panels with subscription or contract pricing. None are purpose-built for <strong className="text-black">pre-MVP founders</strong> who need pay-per-conversation access, experience-based matching, and AI insight summaries in one flow.
        </p>
        <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white shadow-sm mb-8">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="px-4 py-3 font-semibold text-gray-900">Capability</th>
                <th className="px-4 py-3 font-semibold text-gray-900">FoundersSuite</th>
                <th className="px-4 py-3 font-medium text-gray-600">Typical panel / QA tools</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-b border-gray-100">
                <td className="px-4 py-3">Pricing</td>
                <td className="px-4 py-3 font-medium text-gray-900">$45 flat per confirmed B2B conversation</td>
                <td className="px-4 py-3">Subscription, credits, or custom enterprise quotes</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="px-4 py-3">Matching</td>
                <td className="px-4 py-3 font-medium text-gray-900">SVD on lived experience &amp; problem context</td>
                <td className="px-4 py-3">Demographic filters</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="px-4 py-3">Post-conversation output</td>
                <td className="px-4 py-3 font-medium text-gray-900">AI insight summary + bias nudges</td>
                <td className="px-4 py-3">Little or no founder-facing synthesis</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Beachhead</td>
                <td className="px-4 py-3 font-medium text-gray-900">MedTech B2B (hardest reach → expandable moat)</td>
                <td className="px-4 py-3">Horizontal or QA-oriented</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
          <p className="text-sm text-gray-500 uppercase tracking-wide mb-3">Contrast</p>
          <p className="text-gray-700 mb-4">
            <span className="text-gray-900 font-medium">Research panels:</span> Pay for access; you still source relevance and synthesize notes yourself.
          </p>
          <p className="text-gray-700">
            <span className="text-gray-900 font-medium">FoundersSuite:</span> Match → converse → receive investor-ready synthesis—undercutting the DIY cost of a single qualified B2B contact.
          </p>
        </div>
      </section>

      <section className="px-6 max-w-4xl mx-auto mb-24">
        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-8">How it works</h2>
        <ol className="space-y-6 text-lg text-gray-700 leading-relaxed list-decimal list-inside">
          <li className="pl-2">
            <span className="font-semibold text-black">AI-powered matching.</span> An SVD recommendation engine surfaces testers by problem domain, lived experience, and discovery needs—with domain-specific weighting (e.g., regulatory context for MedTech).
          </li>
          <li className="pl-2">
            <span className="font-semibold text-black">Tinder-style review.</span> Founders accept, reject, or dig deeper on each suggestion; matched testers receive invites while founders retain visibility into credibility signals.
          </li>
          <li className="pl-2">
            <span className="font-semibold text-black">AI feedback summary.</span> After each round, founders get synthesized insights from conversations and community threads, plus nudges when interview questions skew leading or biased.
          </li>
        </ol>
      </section>

      <section className="px-6 max-w-4xl mx-auto mb-24">
        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-8">Why &ldquo;FoundersSuite&rdquo;</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          The name signals a <strong className="text-black">full workflow suite</strong> for founders—not a single survey link or panel credit. Company profiles, matcher feeds, post-interview reports, and community signal live in one two-sided product rather than a patchwork of spreadsheets and DMs.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          For testers, it is equally intentional: a profile that captures domain background, availability, and compensation expectations, plus a ranked feed of opportunities that respect their expertise instead of treating them as interchangeable panelists.
        </p>
      </section>

      <section className="px-6 max-w-4xl mx-auto mb-24">
        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-8">What FoundersSuite optimizes for</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Not vanity engagement on a feed. The wedge is <strong className="text-black">real, structured signal before MVP</strong>—conversations with the right people, synthesized into evidence a founder can defend in a pitch.
        </p>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 space-y-4 text-gray-700">
          <p>
            <strong className="text-black">Signal quality</strong> — Domain-matched end users, not generic demographics.
          </p>
          <p>
            <strong className="text-black">Founder time</strong> — Centralized booking and summaries versus hours of cold outreach per contact.
          </p>
          <p>
            <strong className="text-black">Economic access</strong> — Flat per-conversation pricing that undercuts DIY B2B discovery at typical founder opportunity cost.
          </p>
        </div>
      </section>

      <section className="px-6 max-w-4xl mx-auto mb-24">
        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-8">Strategic framing</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          We launch in <strong className="text-black">MedTech B2B</strong> because failure rates from lack of product-market fit are acute, end users are among the hardest B2B professionals to reach cold, and hospital innovation partnerships (e.g., ANA Innovation Committees) offer a credible supply wedge. Winning the hardest vertical makes expansion into adjacent B2B domains—SaaS, edtech, vehicle tech—structurally easier because sourcing infrastructure transfers.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Primary research validated demand: <strong className="text-black">85% of interviewed founders</strong> said they would use the platform; <strong className="text-black">65%</strong> rated existing discovery tools unreliable. The Beall Butterworth competition prototype demonstrated a working two-sided flow; Stella Zhang NVC placement extended the same narrative to investor-facing storytelling.
        </p>
      </section>

      <section className="px-6 max-w-4xl mx-auto mb-24">
        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-8">Product stance</h2>
        <div className="space-y-5 text-lg text-gray-700 leading-relaxed">
          <p>
            The interface is a <strong className="text-black">two-sided React web app</strong>: founders onboard with company context, product demos, and tester requirements; testers onboard with domain expertise, availability, and preferences—then interact through matcher feeds and a community board. Walkthroughs with real users drove iterative refinement, including accessibility considerations such as color-blind-safe UI patterns.
          </p>
          <p>
            Under the hood, the team built a full-stack prototype in-house: <strong className="text-black">SQL backend</strong>, SVD-based recommendations with domain tuning, a fine-tuned LLM, and <strong className="text-black">LangChain agents</strong> for insight extraction and post-interview bias detection—seeded with public datasets and validated through UI tests before scaling sourcing partnerships.
          </p>
        </div>
      </section>

      <section className="px-6 max-w-4xl mx-auto mb-24">
        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-8">Product demo</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-10">
          Prototype walkthrough: founder and tester onboarding, AI-matched feed, and post-conversation reporting as built for the Beall Butterworth submission.
        </p>
        <BrowserDemoShell hostname="founderssuite.app" videoSrc="/fs-demo.mp4" contentBg="#ffffff" />
      </section>

      <Footer />
    </main>
  );
}
