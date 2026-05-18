import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Footer from "../layout/Footer";
import type { Project } from "../../lib/projects";
import CaseStudyTechStack from "./CaseStudyTechStack";

export default function GenericCaseStudy({ project }: { project: Project }) {
  return (
    <main className="min-h-screen bg-transparent">
      <div className="pt-8 pb-8 px-6 max-w-7xl mx-auto md:pt-10">
        <Link
          href="/#work"
          className="text-sm text-gray-500 hover:text-black transition-colors inline-flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Work
        </Link>
      </div>

      <div className="px-6 max-w-7xl mx-auto mb-16">
        <div className="flex items-center gap-4 mb-4">
          <span className="px-4 py-1.5 rounded-full text-sm font-medium text-white" style={{ backgroundColor: project.color }}>
            {project.type}
          </span>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-black mb-6">{project.title}</h1>

        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl">{project.description}</p>
        <CaseStudyTechStack slug={project.slug} accentColor={project.color} />
      </div>

      <div className="w-full h-[60vh] mb-20" style={{ backgroundColor: `${project.color}20` }}>
        <div className="w-full h-full flex items-center justify-center">
          <p className="text-gray-400">Project Hero Image</p>
        </div>
      </div>

      <div className="px-6 max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl font-semibold text-black mb-6">Overview</h2>
        <p className="text-lg text-gray-700 leading-relaxed">{project.overview}</p>
      </div>

      <div className="px-6 max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl font-semibold text-black mb-6">Process</h2>
        <ol className="space-y-4">
          {project.process.map((step, index) => (
            <li key={index} className="flex gap-4">
              <span
                className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-medium"
                style={{ backgroundColor: project.color }}
              >
                {index + 1}
              </span>
              <p className="text-lg text-gray-700 pt-0.5">{step}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className="px-6 max-w-7xl mx-auto mb-20">
        <h2 className="text-3xl font-semibold text-black mb-8">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {project.gallery.map((_, index) => (
            <div key={index} className="aspect-video rounded-2xl overflow-hidden" style={{ backgroundColor: `${project.color}20` }}>
              <div className="w-full h-full flex items-center justify-center">
                <p className="text-gray-400">Gallery Image {index + 1}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-6 max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl font-semibold text-black mb-6">Reflection</h2>
        <p className="text-lg text-gray-700 leading-relaxed">{project.reflection}</p>
      </div>

      <Footer />
    </main>
  );
}
