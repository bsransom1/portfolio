import { projects } from '../../data/projects';
import ProjectCard from './ProjectCard';

function ProjectGrid() {
  return (
    <section id="projects" className="space-y-12 max-w-6xl mx-auto"> 
      <div className="space-y-10"> 
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="bg-white/95 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectGrid;