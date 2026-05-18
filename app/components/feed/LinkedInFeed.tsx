"use client";

import { ChevronDown } from "lucide-react";
import { projects } from "../../lib/projects";
import { LINKEDIN_CONTENT_MAX } from "../../lib/feed/linkedinFeedTheme";
import { scrollToWorkSection } from "./homepageScroll";
import ProjectPostCard from "./ProjectPostCard";
import ProfileHeroCard from "./ProfileHeroCard";

export default function LinkedInFeed() {
  return (
    <section
      className="w-full"
      style={{ fontFamily: 'system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}
    >
      <div className="flex min-h-[calc(100dvh-52px)] flex-col items-center justify-center px-4 py-6 sm:py-8 md:py-10">
        <div className="relative flex w-full max-w-[min(100%,920px)] shrink-0 flex-col items-center gap-5 px-0">
          <ProfileHeroCard />
          <button
            type="button"
            onClick={scrollToWorkSection}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-[#0A66C2] bg-white px-4 py-2 text-sm font-semibold text-[#0A66C2] shadow-sm transition-colors hover:bg-[#f0f7ff]"
            aria-controls="work"
          >
            View projects
            <ChevronDown className="h-4 w-4" aria-hidden />
          </button>
        </div>
      </div>

      <div className="mx-auto px-4 pb-10 pt-10 md:pt-14" style={{ maxWidth: LINKEDIN_CONTENT_MAX }}>
        <div id="work" className="mx-auto w-full max-w-[782px] scroll-mt-20 space-y-12 md:space-y-16">
          {projects.map((project) => (
            <ProjectPostCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
