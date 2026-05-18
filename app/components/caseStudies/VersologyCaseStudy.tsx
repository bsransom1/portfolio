"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Footer from "../layout/Footer";
import type { Project } from "../../lib/projects";
import CaseStudyTechStack from "./CaseStudyTechStack";

interface VersologyCaseStudyProps {
  project: Project;
}

function IphoneDemo({ src }: { src: string }) {
  return (
    <div className="relative w-[280px] mx-auto">
      <div
        className="relative bg-black rounded-[42px] p-[6px] shadow-[0_8px_32px_rgba(0,0,0,0.2)]"
        style={{
          boxShadow: "0 8px 32px rgba(0,0,0,0.2), 0 2px 8px rgba(0,0,0,0.15)",
        }}
      >
        <div
          className="absolute inset-0 rounded-[42px] pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0.3) 50%, rgba(255,255,255,0.1) 100%)",
            border: "1px solid rgba(255,255,255,0.15)",
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[110px] h-[28px] bg-black rounded-b-[16px] z-10" />
        <div className="relative bg-black rounded-[38px] overflow-hidden">
          <video autoPlay loop muted playsInline className="w-full h-auto">
            <source src={src} type="video/mp4" />
          </video>
        </div>
        <div className="absolute top-[120px] -right-[3px] w-[3px] h-[60px] bg-gradient-to-r from-gray-700 to-gray-900 rounded-r-sm" />
        <div className="absolute top-[90px] -left-[3px] w-[3px] h-[28px] bg-gradient-to-l from-gray-700 to-gray-900 rounded-l-sm" />
        <div className="absolute top-[125px] -left-[3px] w-[3px] h-[28px] bg-gradient-to-l from-gray-700 to-gray-900 rounded-l-sm" />
      </div>
    </div>
  );
}

export default function VersologyCaseStudy({ project }: VersologyCaseStudyProps) {
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
          A mobile study environment that treats scripture as layered knowledge: text, terms, culture, and history in one searchable archive.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl border-l-4 border-gray-300 pl-6">
          Versology turns Bible study from an endless tab-switching exercise into a single place where &ldquo;what does this passage mean?&rdquo; can be followed all the way to context—without losing the thread.
        </p>
        <CaseStudyTechStack slug={project.slug} accentColor={project.color} />
      </section>

      <section className="px-6 max-w-4xl mx-auto mb-24">
        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-8">What Versology does</h2>
        <ul className="space-y-4 text-lg text-gray-700 leading-relaxed">
          <li className="flex gap-3">
            <span className="text-gray-400 font-mono text-sm mt-1 shrink-0">→</span>
            <span>
              Provides a <strong className="text-black">central archive</strong> of biblical concepts, people, places, and themes—organized for lookup during reading or teaching prep.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 font-mono text-sm mt-1 shrink-0">→</span>
            <span>
              Surfaces <strong className="text-black">historical and cultural context</strong> (period, setting, genre expectations) so interpretation is grounded in more than modern intuition.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 font-mono text-sm mt-1 shrink-0">→</span>
            <span>
              Connects <strong className="text-black">cross-references and related ideas</strong> so study accumulates: today's question strengthens yesterday's map of the text.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 font-mono text-sm mt-1 shrink-0">→</span>
            <span>
              Prioritizes <strong className="text-black">clarity of navigation on mobile</strong>—where serious readers increasingly read, highlight, and search.
            </span>
          </li>
        </ul>
        <div className="mt-10 grid md:grid-cols-2 gap-6 text-base">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
            <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">Typical study stack</p>
            <p className="text-gray-800 font-medium">Bible app + browser tabs + notes → fragmented context, lost citations</p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
            <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">With Versology</p>
            <p className="text-gray-800 font-medium">One structured archive → look up → read context → follow threads</p>
          </div>
        </div>
      </section>

      <section className="px-6 max-w-4xl mx-auto mb-24">
        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-8">The core problem</h2>
        <p className="text-lg text-gray-900 font-medium mb-6">
          Serious Bible study is knowledge work. Knowledge work breaks when sources are scattered and unstable.
        </p>
        <div className="space-y-5 text-lg text-gray-700 leading-relaxed">
          <p>
            Readers bounce between translations, commentaries, search results, and forums. Each hop risks <strong className="text-black">low-quality summaries, outdated cultural assumptions, or outright misinformation</strong>. Even thoughtful learners struggle to maintain a coherent notebook across apps that were not designed to link concepts.
          </p>
          <p>
            Devotional and reading-plan apps solve a different job: rhythm and encouragement. They often stop short when the user asks a deeper historical or linguistic question—precisely where a reference archive earns its keep.
          </p>
          <p className="text-gray-900 font-medium">The pain shows up as:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>Time lost to search instead of synthesis</li>
            <li>Shallow confidence—copy-pasting takes without understanding provenance</li>
            <li>Abandoned study habits when friction exceeds reward</li>
          </ul>
        </div>
      </section>

      <section className="px-6 max-w-4xl mx-auto mb-24">
        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-8">Design insight</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Understanding scripture is <strong className="text-black">cumulative</strong>. Concepts reappear across books; places gain meaning as narratives unfold; theological terms carry technical weight. A product that only shows one verse at a time fights how human memory works.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Versology treats the Bible as a <strong className="text-black">network to explore</strong>, not a flat feed: each entry should invite the next question—who else, where else, what else happened here—with surfaces that stay readable on a phone.
        </p>
      </section>

      <section className="px-6 max-w-4xl mx-auto mb-24">
        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-8">Differentiation</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          The market splits roughly into reading experiences (daily verse, audio, plans) and heavy desktop software for specialists. Versology targets the middle: <strong className="text-black">motivated non-specialists</strong> who want depth without seminary tooling.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          It is <strong className="text-black">reference- and exploration-first</strong>, not streak-first: the success metric is whether the user leaves with a clearer grasp of the text’s world—not only whether they tapped &ldquo;done&rdquo; today.
        </p>
        <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
          <p className="text-sm text-gray-500 uppercase tracking-wide mb-3">Contrast</p>
          <p className="text-gray-700 mb-4">
            <span className="text-gray-900 font-medium">Devotional apps:</span> Keep you opening daily; thin on structured reference when questions arise.
          </p>
          <p className="text-gray-700">
            <span className="text-gray-900 font-medium">Versology:</span> Optimizes for inquiry—terms, timelines, and threads that support real comprehension.
          </p>
        </div>
      </section>

      <section className="px-6 max-w-4xl mx-auto mb-24">
        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-8">The study loop</h2>
        <ol className="space-y-6 text-lg text-gray-700 leading-relaxed list-decimal list-inside">
          <li className="pl-2">
            <span className="font-semibold text-black">Encounter a question.</span> Reading surfaces an unfamiliar name, place, or idea.
          </li>
          <li className="pl-2">
            <span className="font-semibold text-black">Look up in-archive.</span> The user jumps to an entry that defines the concept and situates it historically.
          </li>
          <li className="pl-2">
            <span className="font-semibold text-black">Read context, not only definition entries.</span> Culture, genre, and setting frame what the original audience would have heard.
          </li>
          <li className="pl-2">
            <span className="font-semibold text-black">Follow links.</span> Related passages and themes build a personal map of scripture instead of isolated facts.
          </li>
          <li className="pl-2">
            <span className="font-semibold text-black">Return to the text informed.</span> The loop closes when the reader re-reads with sharper eyes—not when a checklist increments.
          </li>
        </ol>
      </section>

      <section className="px-6 max-w-4xl mx-auto mb-24">
        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-8">Why &ldquo;Versology&rdquo;</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          The name signals the product’s ambition: <strong className="text-black">verse</strong> as the anchor, <strong className="text-black">-ology</strong> as systematic study—not a motivational quote generator. It communicates depth without pretending to replace community, preaching, or scholarly guilds.
        </p>
      </section>

      <section className="px-6 max-w-4xl mx-auto mb-24">
        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-8">What Versology optimizes for</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Comprehension and navigability—not maximizing shallow session count. The wedge is <strong className="text-black">trust that the archive is organized for study</strong>, not for engagement hacks.
        </p>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 space-y-4 text-gray-700">
          <p>
            <strong className="text-black">Clarity</strong> — Can a motivated reader find the right entry in seconds, not minutes of search?
          </p>
          <p>
            <strong className="text-black">Depth with guardrails</strong> — Does context reflect mainstream historical scholarship and avoid sensational claims?
          </p>
          <p>
            <strong className="text-black">Cumulative learning</strong> — Does the IA reward return visits with richer connections?
          </p>
        </div>
      </section>

      <section className="px-6 max-w-4xl mx-auto mb-24">
        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-8">Strategic framing</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Faith-tech often competes on content licensing or personality brands. A durable moat in this category can be <strong className="text-black">information architecture</strong>: the graph of concepts, the quality of summaries, and the discipline of linking—i.e., the product is the library and the map.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Versology points at a long-term position: become the <strong className="text-black">default pocket reference</strong> for readers who have outgrown atomized daily content but are not yet power users of academic tools.
        </p>
      </section>

      <section className="px-6 max-w-4xl mx-auto mb-24">
        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-8">Product stance</h2>
        <div className="space-y-5 text-lg text-gray-700 leading-relaxed">
          <p>
            Theological nuance demands humility in UI copy and sourcing. A shipping product would need editorial standards, attribution for paraphrases, denominationally transparent coverage where interpretations diverge, and accessibility for long reading sessions.
          </p>
          <p>
            Technically, Versology was scoped as a <strong className="text-black">two-month full-stack sprint</strong>: prove the core navigation and content model on-device, with performance and offline behavior as next-layer concerns.
          </p>
        </div>
      </section>

      <section className="px-6 max-w-4xl mx-auto mb-24">
        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-8">Product demo</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-10">
          Prototype walkthrough: archive navigation, article views, and transitions as implemented for the build.
        </p>
        <div className="flex justify-center">
          <IphoneDemo src="/videos/versology_iphone_demo.mp4" />
        </div>
      </section>

      <Footer />
    </main>
  );
}
