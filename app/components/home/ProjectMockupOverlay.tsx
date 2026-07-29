"use client";

import { PROJECT_FEED_DEMOS } from "../../lib/feed/projectDemoConfig";
import ScreenDemo from "./ScreenDemo";

/** Uniform-width demos for the project grid — full interface, no crop. */
export default function ProjectMockupOverlay({ slug }: { slug: string }) {
  const demo = PROJECT_FEED_DEMOS[slug];
  if (!demo) return null;

  return (
    <div className="flex w-full items-center justify-center transition-transform duration-500 ease-out group-hover:-translate-y-1">
      <div className="w-full max-w-[460px]">
        <ScreenDemo src={demo.videoSrc} mimeType={demo.mimeType} />
      </div>
    </div>
  );
}
