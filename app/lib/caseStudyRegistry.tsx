import type { ComponentType } from "react";
import type { Project } from "./projects";
import VagalToneCaseStudy from "../components/caseStudies/VagalToneCaseStudy";
import FoundersSuiteCaseStudy from "../components/caseStudies/FoundersSuiteCaseStudy";
import StepLadderCaseStudy from "../components/caseStudies/StepLadderCaseStudy";
import LeidosCaseStudy from "../components/caseStudies/LeidosCaseStudy";

export type CaseStudyPageComponent = ComponentType<{ project: Project }>;

const CUSTOM_CASE_STUDIES: Partial<Record<string, CaseStudyPageComponent>> = {
  vagaltone: VagalToneCaseStudy,
  founderssuite: FoundersSuiteCaseStudy,
  stepladder: StepLadderCaseStudy,
  "leidos-genai": LeidosCaseStudy,
};

export function getCaseStudyComponent(slug: string): CaseStudyPageComponent | undefined {
  return CUSTOM_CASE_STUDIES[slug];
}
