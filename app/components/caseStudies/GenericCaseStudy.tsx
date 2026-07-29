import type { Project } from "../../lib/projects";
import CaseStudyShell, { CaseStudyBullets, CaseStudySection } from "./CaseStudyShell";

export default function GenericCaseStudy({ project }: { project: Project }) {
  return (
    <CaseStudyShell project={project} lead={project.description}>
      <CaseStudySection title="Overview">
        <p className="text-base leading-relaxed text-neutral-300 md:text-lg">{project.overview}</p>
      </CaseStudySection>

      <CaseStudySection title="Process">
        <CaseStudyBullets items={project.process.map((step) => <>{step}</>)} />
      </CaseStudySection>

      <CaseStudySection title="Reflection">
        <p className="text-base leading-relaxed text-neutral-300 md:text-lg">{project.reflection}</p>
      </CaseStudySection>
    </CaseStudyShell>
  );
}
