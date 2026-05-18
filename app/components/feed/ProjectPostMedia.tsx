"use client";

import type { Project } from "../../lib/projects";
import { PROJECT_FEED_DEMOS } from "../../lib/feed/projectDemoConfig";
import BrowserDemoShell from "./BrowserDemoShell";
import IphoneDemoShell from "./IphoneDemoShell";

const WRAP = "mt-2 mb-0 w-full overflow-hidden";

export default function ProjectPostMedia({ project }: { project: Project }) {
  const demo = PROJECT_FEED_DEMOS[project.slug];
  if (!demo) return null;

  if (demo.kind === "iphone") {
    return (
      <div className={WRAP}>
        <IphoneDemoShell videoSrc={demo.videoSrc} size={demo.phoneSize ?? "md"} />
      </div>
    );
  }

  return (
    <div className={WRAP}>
      <BrowserDemoShell
        hostname={demo.hostname}
        videoSrc={demo.videoSrc}
        contentBg={demo.contentBg}
      />
    </div>
  );
}
