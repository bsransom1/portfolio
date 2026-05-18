import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "../../lib/projects";
import { getCaseStudyComponent } from "../../lib/caseStudyRegistry";
import GenericCaseStudy from "../../components/caseStudies/GenericCaseStudy";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const CaseStudy = getCaseStudyComponent(slug);
  if (CaseStudy) {
    return <CaseStudy project={project} />;
  }

  return <GenericCaseStudy project={project} />;
}
