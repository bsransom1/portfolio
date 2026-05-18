export interface Project {
  id: string;
  slug: string;
  title: string;
  type: string;
  description: string;
  thumbnail: string;
  tags: string[];
  overview: string;
  process: string[];
  gallery: string[];
  reflection: string;
  color: string;
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "leidos-genai",
    title: "Leidos Capstone Project - BAA/RFP Proposal Automation",
    type: "Full-stack / Defense",
    description:
      "Internal GenAI tool for government solicitations: upload a BAA or RFP, pull out key requirements, and draft proposal sections with roles for viewers, editors, and admins.",
    thumbnail: "/leidos-genai-thumb.svg",
    tags: ["GenAI", "Next.js", "Anthropic", "PDF/RAG", "Leidos"],
    overview:
      "Built with Leidos in collaboration with DARPA’s Information Innovation Office (I2O): a six-person capstone team delivered a full-stack web application using the Anthropic Claude API to automate solicitation breakdown and proposal scaffolding, with dashboards for pipeline health and confidence scoring.",
    process: [
      "PDF ingestion pipeline with OCR fallback",
      "Requirement mining (shall / must / required) and Grammarly-style flagging UX",
      "RAG document library and organizational context injection",
      "Claude-powered draft generation and confidence scoring",
      "Role-based access: Viewer, Editor, Admin",
      "Stakeholder demos to Leidos"
    ],
    gallery: [],
    reflection:
      "Shipping credible govtech UX without live BAA data meant leaning on synthetic libraries, tight prompt contracts, and ruthless escalation when stakeholder scope shifted mid-sprint.",
    color: "#761876"
  },
  {
    id: "2",
    slug: "stepladder",
    title: "StepLadder",
    type: "Clinical workflow",
    description:
      "A therapist-facing tool for assigning between-session homework and reviewing structured patient work before the next session.",
    thumbnail: "/stepladder.png",
    tags: ["Web App", "Clinical UX", "Mental Health"],
    overview:
      "StepLadder assignments grounded in evidence-based modalities (CBT, DBT, ERP, ACT) live in a guided patient experience; therapists get structured data before the next session instead of PDFs and vague recall.",
    process: [
      "Problem space: between-session breakdown",
      "Clinical and workflow research",
      "Therapist assign / patient execute / review loop",
      "Data model for behavioral and emotional signals",
      "Differentiation from content-library tools",
      "Privacy, scope, and implementation"
    ],
    gallery: [],
    reflection:
      "The wedge is adherence and correct execution outside the session—the layer where therapy often fails and where structured product design can matter most.",
    color: "#16A34A"
  },
  {
    id: "3",
    slug: "lua",
    title: "Lua",
    type: "Mobile App",
    description:
      "A mobile app for college students to learn about anxiety and practice regulation in a guided, game-like flow.",
    thumbnail: "/lua.png",
    tags: ["Mobile App", "UI/UX", "Health"],
    overview:
      "Three-month health informatics sprint: twenty student interviews across five incumbent DAIs, synthesis on personability and personalization gaps, then a product concept that pairs structured progression with regulation tools.",
    process: [
      "Qualitative research: 20 interviews, 5 leading DAIs benchmarked",
      "Synthesis on efficacy, personability, and engagement frictions",
      "Experience principles: guided arc vs. content library",
      "Low-fidelity flows and IA for education + practice",
      "High-fidelity mobile prototype and demo for testing"
    ],
    gallery: [],
    reflection:
      "The hardest design tension is gamification with integrity: mechanics must pull students through evidence-informed practice without trivializing clinical anxiety or substituting for professional care.",
    color: "#0ea5e9"
  },
  {
    id: "4",
    slug: "versology",
    title: "Versology",
    type: "Mobile App",
    description: "A mobile reference for scripture study—terms, context, and related passages in one place.",
    thumbnail: "/projects/logos/versology.png",
    tags: ["Mobile App", "UI/UX", "Education"],
    overview:
      "Versology targets readers who have outgrown atomized devotional feeds but still study on their phones: a structured reference layer for terms, history, and related passages so inquiry does not collapse into random search tabs.",
    process: [
      "Problem framing: fragmented sources vs. cumulative Bible study",
      "Information architecture for entries, linking, and mobile lookup",
      "UI exploration for readable long-form and fast navigation",
      "Full-stack implementation sprint (2 months)",
      "Editorial and sourcing standards sketched for production"
    ],
    gallery: [],
    reflection:
      "Depth without clutter is the constraint: every screen has to earn its place in a study session where attention is scarce and trust is everything.",
    color: "#171717"
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getNextProject(currentSlug: string): Project | undefined {
  const currentIndex = projects.findIndex((p) => p.slug === currentSlug);
  if (currentIndex === -1) return undefined;
  const nextIndex = (currentIndex + 1) % projects.length;
  return projects[nextIndex];
}

export function getPreviousProject(currentSlug: string): Project | undefined {
  const currentIndex = projects.findIndex((p) => p.slug === currentSlug);
  if (currentIndex === -1) return undefined;
  const prevIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
  return projects[prevIndex];
}
