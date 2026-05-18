"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import Footer from "../layout/Footer";
import type { Project } from "../../lib/projects";
import CaseStudyTechStack from "./CaseStudyTechStack";
import {
  getProjectTitleMark,
  projectHeroTitleMarkImgClass,
  projectLuaWordmarkHeroClass,
} from "../../lib/projectMeta";

interface LuaCaseStudyProps {
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

export default function LuaCaseStudy({ project }: LuaCaseStudyProps) {
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
        <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">{project.type}</p>
        <h1
          aria-label={project.title}
          className="text-5xl md:text-6xl lg:text-7xl font-semibold text-black mb-6 leading-tight"
        >
          {titleMark.mode === "inline" ? (
            <span className="inline-flex max-w-full min-w-0 flex-nowrap items-center gap-2 md:gap-3">
              <img
                src={titleMark.src}
                alt=""
                className={projectHeroTitleMarkImgClass(project.slug)}
                decoding="async"
              />
              {titleMark.restImageSrc ? (
                <img
                  src={titleMark.restImageSrc}
                  alt=""
                  className={projectLuaWordmarkHeroClass()}
                  decoding="async"
                />
              ) : null}
              {titleMark.rest ? <span>{titleMark.rest}</span> : null}
            </span>
          ) : (
            project.title
          )}
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-6 leading-relaxed max-w-3xl">
          A gamified anxiety regulator and education system for college students—grounded in a three-month health informatics research sprint.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl border-l-4 border-gray-300 pl-6">
          Most digital anxiety tools are easy to download and easy to abandon. Lua targets the gap between evidence-based techniques and
          day-to-day practice: habit, clarity, and feeling like the product is actually for you.
        </p>
        <CaseStudyTechStack slug={project.slug} accentColor={project.color} />
      </section>

      <section className="px-6 max-w-4xl mx-auto mb-24">
        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-8">What Lua does</h2>
        <ul className="space-y-4 text-lg text-gray-700 leading-relaxed">
          <li className="flex gap-3">
            <span className="text-gray-400 font-mono text-sm mt-1 shrink-0">→</span>
            <span>
              Bundles <strong className="text-black">psychoeducation and in-the-moment regulation</strong> so users learn why a skill matters while they practice it—not only when they are already calm enough to read a long article.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 font-mono text-sm mt-1 shrink-0">→</span>
            <span>
              Uses <strong className="text-black">game-like progression and feedback</strong> (inspired by habit-forming products like Duolingo) to support repetition without treating anxiety like a high-score arcade game.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 font-mono text-sm mt-1 shrink-0">→</span>
            <span>
              Is scoped explicitly for <strong className="text-black">college-age users</strong>, where anxiety prevalence is high and digital interventions often show weak real-world adherence.
            </span>
          </li>
        </ul>
        <div className="mt-10 grid md:grid-cols-2 gap-6 text-base">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
            <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">Typical DAI pattern</p>
            <p className="text-gray-800 font-medium">Download → generic library → low personalization → churn</p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
            <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">Lua hypothesis</p>
            <p className="text-gray-800 font-medium">Structured path → practice loops → clearer “this is for me” → stronger engagement</p>
          </div>
        </div>
      </section>

      <section className="px-6 max-w-4xl mx-auto mb-24">
        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-8">The core problem</h2>
        <p className="text-lg text-gray-900 font-medium mb-6">
          Anxiety among college students is not only common; it is clinically consequential and economically costly. Digital anxiety interventions (DAIs) scale cheaply—but they often fail in the wild.
        </p>
        <div className="space-y-5 text-lg text-gray-700 leading-relaxed">
          <p>
            Users face a crowded market of breathing timers, meditation libraries, and CBT-style worksheets. Many products assume motivation is the only bottleneck. In practice, students describe experiences that feel <strong className="text-black">impersonal, one-size-fits-all, or disconnected from campus life</strong>.
          </p>
          <p className="text-gray-900 font-medium">That failure mode shows up as:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>Low perceived fit—&ldquo;not for someone like me&rdquo;</li>
            <li>Weak habit formation—open once, never integrate into a routine</li>
            <li>Shallow use—features that do not translate into skills used off-device</li>
          </ul>
        </div>
      </section>

      <section className="px-6 max-w-4xl mx-auto mb-24">
        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-8">Design insight</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Sustainable anxiety skills behave like other behavior change: they need <strong className="text-black">clear sequences, repeated practice, and feedback</strong> that makes progress legible. If the only feedback is a generic &ldquo;great job,&rdquo; the loop stalls.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Lua treats <strong className="text-black">gamification as a delivery mechanism</strong>, not the therapy itself: streaks, levels, and micro-rewards exist to keep users inside the skill work—not to replace clinical care or pretend anxiety is a game to beat.
        </p>
      </section>

      <section className="px-6 max-w-4xl mx-auto mb-24">
        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-8">Differentiation</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Many competitors optimize for content volume: large libraries of exercises with weak scaffolding. The student is dumped into a catalog and left to self-direct.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Lua is oriented around a <strong className="text-black">guided arc</strong>: education that explains the &ldquo;why,&rdquo; regulation tools for the &ldquo;when,&rdquo; and progression that makes the next step obvious—not a wall of thumbnails to scroll.
        </p>
        <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
          <p className="text-sm text-gray-500 uppercase tracking-wide mb-3">Contrast</p>
          <p className="text-gray-700 mb-4">
            <span className="text-gray-900 font-medium">Library apps:</span> Here are fifty tools; pick one when you remember.
          </p>
          <p className="text-gray-700">
            <span className="text-gray-900 font-medium">Lua:</span> Here is a path—learn, practice, see progress, repeat on the days anxiety actually shows up.
          </p>
        </div>
      </section>

      <section className="px-6 max-w-4xl mx-auto mb-24">
        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-8">The product loop</h2>
        <ol className="space-y-6 text-lg text-gray-700 leading-relaxed list-decimal list-inside">
          <li className="pl-2">
            <span className="font-semibold text-black">Check in.</span> User names state or context (test week, sleep loss, social situation) so content can feel situational.
          </li>
          <li className="pl-2">
            <span className="font-semibold text-black">Learn in small doses.</span> Psychoeducation is chunked so it fits between classes—not a PDF handout.
          </li>
          <li className="pl-2">
            <span className="font-semibold text-black">Practice with structure.</span> Regulation exercises are framed as levels or sessions with feedback, not one-off timers.
          </li>
          <li className="pl-2">
            <span className="font-semibold text-black">See trajectory.</span> Progress and streaks make adherence visible—critical when motivation dips mid-semester.
          </li>
          <li className="pl-2">
            <span className="font-semibold text-black">Return when it counts.</span> The habit is to open the app when anxiety spikes, not only when bored.
          </li>
        </ol>
      </section>

      <section className="px-6 max-w-4xl mx-auto mb-24">
        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-8">What Lua optimizes for</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Not vanity engagement graphs. The wedge is <strong className="text-black">perceived relevance and repeat practice</strong>—signals that digital anxiety support is working for a population that is skeptical of &ldquo;wellness&rdquo; spam.
        </p>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 space-y-4 text-gray-700">
          <p>
            <strong className="text-black">Personability</strong> — Does this feel tailored to college stressors and identity, not a generic adult meditation brand?
          </p>
          <p>
            <strong className="text-black">Skill transfer</strong> — Does the user understand what to do when anxious outside the app?
          </p>
          <p>
            <strong className="text-black">Retention with integrity</strong> — Does gamification pull users through evidenced-based patterns instead of dark-pattern dopamine?
          </p>
        </div>
      </section>

      <section className="px-6 max-w-4xl mx-auto mb-24">
        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-8">Strategic framing</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Universities are a concentrated market for anxiety products—and a harsh filter for what actually gets used. If a DAI cannot win on campus, it often will not win broadly among young adults.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Lua positions itself as <strong className="text-black">research-informed product design</strong>: validate pain with interviews, benchmark against leading apps, then propose an experience that closes the personalization and habit gaps those tools leave open.
        </p>
      </section>

      <section className="px-6 max-w-4xl mx-auto mb-24">
        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-8">Research process</h2>
        <div className="space-y-5 text-lg text-gray-700 leading-relaxed">
          <p>
            The team ran <strong className="text-black">twenty structured interviews</strong> with college students who had used <strong className="text-black">five leading DAIs</strong>. Sessions probed efficacy, personability, and engagement—not just star ratings.
          </p>
          <p>
            Findings were translated into experience principles before pixel work: where existing tools felt cold, where students wanted guidance versus freedom, and where gamification was requested versus feared.
          </p>
          <p className="text-base text-gray-600">
            Lua is a student research and design project, not a substitute for crisis care or professional treatment. Any production version would need clinical oversight, IRB-aligned study design, and crisis pathways.
          </p>
        </div>
      </section>

      <section className="px-6 max-w-7xl mx-auto mb-24">
        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-8">User research</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-4xl mx-auto">
          Artifacts from synthesis—journey and competitive notes used to align the team on where incumbents broke trust or failed to guide novices.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {["lua1", "lua2"].map((img, index) => (
            <div key={img} className="bg-white rounded-2xl p-4 shadow-lg border border-gray-200">
              <Image
                src={`/case-studies/${img}.png`}
                alt={`User research artifact ${index + 1}`}
                width={600}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 max-w-4xl mx-auto mb-24">
        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-8">What the data emphasized</h2>
        <ul className="space-y-4 text-lg text-gray-700 leading-relaxed">
          <li className="flex gap-3">
            <span className="text-gray-400 font-mono text-sm mt-1 shrink-0">→</span>
            <span>
              <strong className="text-black">Personability ceiling:</strong> no product scored above <strong className="text-black">7/10</strong> when students rated how personable the experience felt.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 font-mono text-sm mt-1 shrink-0">→</span>
            <span>
              <strong className="text-black">Personalization:</strong> <strong className="text-black">80%</strong> of participants named stronger personalization as the top improvement area.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 font-mono text-sm mt-1 shrink-0">→</span>
            <span>
              <strong className="text-black">Gamification:</strong> <strong className="text-black">60%</strong> wanted gamified features—an endorsement of habit mechanics when paired with serious content.
            </span>
          </li>
        </ul>
      </section>

      <section className="px-6 max-w-7xl mx-auto mb-24">
        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-8">Low-fidelity exploration</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-4xl mx-auto">
          Early screens tested information hierarchy: how much education to show before a practice module, and how progression should read on a small display.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {["lualowfi1", "lualowfi2", "lualowfi3", "lualowfi4"].map((img, index) => (
            <div key={img} className="bg-white rounded-2xl p-4 shadow-lg border border-gray-200">
              <Image
                src={`/case-studies/${img}.png`}
                alt={`Low-fidelity mockup ${index + 1}`}
                width={300}
                height={600}
                className="w-full h-auto rounded-lg"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 max-w-4xl mx-auto mb-24">
        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-8">Product demo</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-10">
          High-fidelity prototype in an iPhone frame—scroll-states, transitions, and the core loop as it would ship for user testing.
        </p>
        <div className="flex justify-center">
          <IphoneDemo src="/videos/lua_iphone_demo.mp4" />
        </div>
      </section>

      <Footer />
    </main>
  );
}
