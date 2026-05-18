import { notFound } from "next/navigation";
import StepLadderCaseStudy from "../components/caseStudies/StepLadderCaseStudy";
import { getProjectBySlug } from "../lib/projects";

export default function StepladderPage() {
  const project = getProjectBySlug("stepladder");
  if (!project) {
    notFound();
  }
  return <StepLadderCaseStudy project={project} />;
}
