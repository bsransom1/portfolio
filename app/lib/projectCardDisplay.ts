/** Homepage Engineering grid display config, keyed by project slug. */
export interface ProjectCardDisplay {
  displayName: string;
  roleLabel: string;
  tagline: string;
  logoSrc?: string;
}

export const PROJECT_CARD_DISPLAY: Record<string, ProjectCardDisplay> = {
  "leidos-genai": {
    displayName: "Leidos GenAI",
    roleLabel: "Capstone Partner",
    tagline: "GenAI tool that turns government solicitations into drafted proposals.",
    logoSrc: "/logos/leidos-emblem.png",
  },
  stepladder: {
    displayName: "StepLadder",
    roleLabel: "Founder",
    tagline: "Therapist tool for assigning and reviewing structured between-session work.",
    logoSrc: "/projects/logos/stepladder.png",
  },
  founderssuite: {
    displayName: "FoundersSuite",
    roleLabel: "Beall-Butterworth",
    tagline: "B2B discovery marketplace matching founders with domain-matched testers.",
    logoSrc: "/projects/logos/founderssuite.png",
  },
  vagaltone: {
    displayName: "VagalTone",
    roleLabel: "INF 172",
    tagline: "Music-guided breathing sessions for accessible emotional self-regulation.",
  },
};

export function getProjectCardDisplay(slug: string): ProjectCardDisplay | undefined {
  return PROJECT_CARD_DISPLAY[slug];
}
