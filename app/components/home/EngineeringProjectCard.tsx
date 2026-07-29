"use client";

import Link from "next/link";
import type { Project } from "../../lib/projects";
import { getProjectCaseStudyHref } from "../../lib/projectMeta";
import { getProjectCardDisplay } from "../../lib/projectCardDisplay";
import { saveHomepageScrollPosition } from "../feed/homepageScroll";
import ProjectMockupOverlay from "./ProjectMockupOverlay";

export default function EngineeringProjectCard({ project }: { project: Project }) {
  const display = getProjectCardDisplay(project.slug);
  const href = getProjectCaseStudyHref(project);

  const displayName = display?.displayName ?? project.title;
  const tagline = display?.tagline ?? project.description;

  return (
    <Link
      href={href}
      onClick={saveHomepageScrollPosition}
      className="group flex h-full flex-col focus:outline-none"
    >
      <ProjectMockupOverlay slug={project.slug} />

      <div className="mt-10 text-center">
        <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
          {display?.logoSrc ? (
            <img
              src={display.logoSrc}
              alt=""
              className="h-6 w-auto max-h-6 max-w-[2.75rem] shrink-0 rounded-md object-contain md:h-7 md:max-h-7 md:max-w-[3.25rem]"
              decoding="async"
            />
          ) : null}
          <span className="font-semibold text-white">{displayName}</span>
          <span className="text-sm text-neutral-500">— {display?.roleLabel ?? project.type}</span>
        </div>
        <p className="mx-auto mt-2 max-w-[28rem] text-sm leading-relaxed text-neutral-400">{tagline}</p>
      </div>
    </Link>
  );
}
