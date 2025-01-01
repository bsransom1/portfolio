import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

function ProjectCard({ project }) {
  const cardContent = (
    <motion.article 
      className="p-10"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex flex-col gap-10">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-3xl font-semibold text-gray-900">{project.title}</h3>
            <div className="flex items-center gap-3 text-gray-600">
              <Calendar className="w-5 h-5" />
              <span className="text-base whitespace-nowrap">{project.date}</span>
            </div>
          </div>
          <p className="text-xl text-gray-600 leading-relaxed">{project.description}</p>
          {project.role && <p className="text-lg text-gray-500">{project.role}</p>}
        </div>
        <div className="w-full max-w-3xl mx-auto">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto rounded-lg" // Added rounded-lg here
          />
        </div>
      </div>
    </motion.article>
  );

  if (project.id === 'now-pass') {
    return cardContent;
  }

  return (
    <Link to={`/projects/${project.id}`}>
      {cardContent}
    </Link>
  );
}

export default ProjectCard;