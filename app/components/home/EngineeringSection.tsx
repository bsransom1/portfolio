import { projects } from "../../lib/projects";
import EngineeringProjectCard from "./EngineeringProjectCard";

export default function EngineeringSection() {
  return (
    <section id="work" className="mx-auto w-full max-w-[1040px] scroll-mt-8 px-6 pt-16 md:pt-20">
      <div className="mb-12 text-center md:mb-16">
        <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">Projects</h2>
      </div>

      <div className="grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 md:gap-x-14 md:gap-y-24">
        {projects.map((project) => (
          <EngineeringProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
