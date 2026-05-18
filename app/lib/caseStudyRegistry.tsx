import type { ComponentType } from "react";
import type { Project } from "./projects";
import LuaCaseStudy from "../components/caseStudies/LuaCaseStudy";
import VersologyCaseStudy from "../components/caseStudies/VersologyCaseStudy";
import StepLadderCaseStudy from "../components/caseStudies/StepLadderCaseStudy";
import LeidosCaseStudy from "../components/caseStudies/LeidosCaseStudy";

export type CaseStudyPageComponent = ComponentType<{ project: Project }>;

const CUSTOM_CASE_STUDIES: Partial<Record<string, CaseStudyPageComponent>> = {
  lua: LuaCaseStudy,
  versology: VersologyCaseStudy,
  stepladder: StepLadderCaseStudy,
  "leidos-genai": LeidosCaseStudy,
};

export function getCaseStudyComponent(slug: string): CaseStudyPageComponent | undefined {
  return CUSTOM_CASE_STUDIES[slug];
}
