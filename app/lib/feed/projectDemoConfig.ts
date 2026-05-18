import type { Project } from "../projects";

export type FeedDemoKind = "iphone" | "browser";

export type ProjectFeedDemo =
  | { kind: "iphone"; videoSrc: string; phoneSize?: "md" | "sm" }
  | { kind: "browser"; videoSrc: string; hostname: string; contentBg?: string };

/** Homepage feed demo chrome + asset per project slug */
export const PROJECT_FEED_DEMOS: Partial<Record<Project["slug"], ProjectFeedDemo>> = {
  lua: { kind: "iphone", videoSrc: "/lua-demo.mp4", phoneSize: "sm" },
  versology: { kind: "iphone", videoSrc: "/versology-demo.mp4", phoneSize: "sm" },
  stepladder: {
    kind: "browser",
    videoSrc: "/stepladder-demo.mp4",
    hostname: "stepladder.dev",
    contentBg: "#FDFBF6",
  },
  "leidos-genai": {
    kind: "browser",
    videoSrc: "/v1.mp4",
    hostname: "workspace.leidos-genai.internal / BAA-RFP",
    contentBg: "#0f172a",
  },
};
