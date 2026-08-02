export type HighlightSegment =
  | { kind: "text"; value: string }
  | {
      kind: "logo";
      src: string;
      alt: string;
      /** Spelled brand name shown beside the mark. */
      label?: string;
      /** Small square emblem next to a bold label (screenshot-style). */
      emblem?: boolean;
      /** Wide emblem — shrink to height, keep full mark visible. */
      wide?: boolean;
      href?: string;
    }
  | { kind: "photo"; src: string; alt: string; gallery?: string[] };

export interface Highlight {
  id: string;
  segments: HighlightSegment[];
}

/** Education header shown above the Previously list (not a bullet). */
export const EDUCATION_HEADER: HighlightSegment[] = [
  { kind: "text", value: "B.S. Informatics" },
  {
    kind: "logo",
    src: "/logos/uci-emblem.png",
    alt: "UC Irvine",
    label: "UC-Irvine",
    emblem: true,
    href: "https://ics.uci.edu/",
  },
];

/** Bullet lines under the Previously label. */
export const PREVIOUSLY_HIGHLIGHTS: Highlight[] = [
  {
    id: "perplexity",
    segments: [
      {
        kind: "logo",
        src: "/logos/perplexity-emblem.png",
        alt: "Perplexity",
        label: "Perplexity",
        emblem: true,
        href: "https://www.perplexity.ai/comet",
      },
      { kind: "text", value: " Campus Partner" },
    ],
  },
  {
    id: "prev",
    segments: [
      { kind: "text", value: "Software Engineer " },
      {
        kind: "logo",
        src: "/logos/leidos-emblem.png",
        alt: "Leidos",
        label: "Leidos",
        emblem: true,
        wide: true,
        href: "https://www.leidos.com/",
      },
      { kind: "text", value: " · UX Researcher " },
      {
        kind: "logo",
        src: "/logos/shades-emblem.png",
        alt: "Shades",
        label: "Shades",
        emblem: true,
        href: "https://www.linkedin.com/company/shades-news/",
      },
    ],
  },
  {
    id: "nvc",
    segments: [
      { kind: "logo", src: "/profile/nvc.png", alt: "Stella Zhang New Venture Competition", href: "https://merage.uci.edu/research-faculty/centers/innovation-entrepreneurship/new-venture-competiton.html" },
      { kind: "text", value: "Stella Zhang NVC Finalist ($11k)" },
      {
        kind: "photo",
        src: "/nvc-photo.JPG",
        alt: "Stella Zhang New Venture Competition",
        gallery: [
          "/nvc-photo.JPG",
          "/nvc/finale-group.png",
          "/nvc/restwing-win.png",
        ],
      },
    ],
  },
];
