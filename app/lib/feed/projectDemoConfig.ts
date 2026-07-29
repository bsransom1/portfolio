import type { Project } from "../projects";

export type ProjectFeedDemo = {
  videoSrc: string;
  mimeType?: string;
};

/** Homepage + case study demo asset per project slug */
export const PROJECT_FEED_DEMOS: Partial<Record<Project["slug"], ProjectFeedDemo>> = {
  vagaltone: {
    videoSrc: "/172.mp4",
  },
  founderssuite: {
    videoSrc: "/fs-demo.mp4",
  },
  stepladder: {
    videoSrc: "/videos/stepladder.mp4",
  },
  "leidos-genai": {
    videoSrc: "/v1.mp4",
  },
};
