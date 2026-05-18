"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { Project } from "../../lib/projects";
import {
  getProjectCaseStudyHref,
  getProjectDevRange,
  getProjectMarkSrc,
  getProjectTitleMark,
  projectUsesInlineTitleMark,
  projectCardTitleMarkImgClass,
  projectLeidosTitleRestClass,
  projectLuaWordmarkCardClass,
} from "../../lib/projectMeta";
import { LINKEDIN_CARD_BORDER } from "../../lib/feed/linkedinFeedTheme";
import { saveHomepageScrollPosition } from "./homepageScroll";
import ProjectPostMedia from "./ProjectPostMedia";
import ProjectStackStrip from "./ProjectStackStrip";

export default function ProjectPostCard({ project }: { project: Project }) {
  const caseHref = getProjectCaseStudyHref(project);
  const devRange = getProjectDevRange(project.slug);
  const markSrc = getProjectMarkSrc(project.slug);
  const titleMark = getProjectTitleMark(project.slug, project.title);

  return (
    <div className="w-full">
      <article className="overflow-hidden rounded-lg border bg-white shadow-sm" style={{ borderColor: LINKEDIN_CARD_BORDER }}>
        <div className="px-5 pb-4 pt-5">
          <h2
            aria-label={project.title}
            className="mb-2 text-xl font-semibold leading-snug tracking-tight text-[rgba(0,0,0,0.9)] md:text-2xl"
          >
            {titleMark.mode === "inline" ? (
              <span
                className={`inline-flex gap-x-1.5 md:gap-x-2 ${
                  project.slug === "leidos-genai" || project.slug === "lua" || project.slug === "founderssuite"
                    ? "items-center"
                    : "items-baseline"
                } ${project.slug === "lua" ? "max-w-full flex-nowrap" : "flex-wrap"}`}
              >
                <img
                  src={titleMark.src}
                  alt=""
                  className={projectCardTitleMarkImgClass(project.slug)}
                  decoding="async"
                />
                {titleMark.restImageSrc ? (
                  <img
                    src={titleMark.restImageSrc}
                    alt=""
                    className={projectLuaWordmarkCardClass()}
                    decoding="async"
                  />
                ) : null}
                {titleMark.rest ? (
                  <span className={projectLeidosTitleRestClass(project.slug)}>{titleMark.rest}</span>
                ) : null}
              </span>
            ) : (
              project.title
            )}
          </h2>
          <p className="text-sm leading-relaxed text-gray-700">{project.description}</p>
          <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2">
            {markSrc && !projectUsesInlineTitleMark(project.slug) ? (
              <img
                src={markSrc}
                alt={`${project.title} logo`}
                className={`h-11 w-11 shrink-0 object-contain ${
                  project.slug === "founderssuite" ? "rounded-xl" : ""
                }`}
                decoding="async"
              />
            ) : (
              <span
                className="inline-block rounded-full px-2.5 py-0.5 text-xs font-medium text-white"
                style={{ backgroundColor: project.color }}
              >
                {project.type}
              </span>
            )}
            <span className="text-xs text-gray-500" title="Development period">
              {devRange}
            </span>
          </div>
        </div>

        <ProjectPostMedia project={project} />

        <div className="flex flex-col gap-3 border-t border-gray-100 bg-white px-4 py-3.5 transition-colors sm:flex-row sm:items-center sm:justify-between sm:gap-2 sm:px-5 sm:hover:bg-gray-50">
          <Link
            href={caseHref}
            onClick={saveHomepageScrollPosition}
            className="flex min-w-0 flex-1 items-center justify-between gap-2 rounded-md py-0.5 text-left sm:justify-start sm:gap-1"
          >
            <span className="text-sm font-semibold" style={{ color: project.color }}>
              View case study →
            </span>
            <ChevronRight className="h-4 w-4 shrink-0" style={{ color: project.color }} aria-hidden />
          </Link>
          <ProjectStackStrip slug={project.slug} />
        </div>
      </article>
    </div>
  );
}
