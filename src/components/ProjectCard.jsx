import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Button from './Button';

export default function ProjectCard({ project }) {
  return (
    <motion.div
      className="card overflow-hidden group border border-slate-800 hover:border-violet-500/60"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
    >
      {/* Project Image */}
      <div className="relative h-32 overflow-hidden bg-gradient-to-br from-[#17243c] via-[#11152a] to-[#24104b]">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextElementSibling.style.display = 'flex';
          }}
        />
        <div className="w-full h-full hidden flex-col items-center justify-center text-slate-300 bg-gradient-to-br from-[#101a2d] via-[#11152a] to-[#24104b] absolute inset-0">
          <span className="text-4xl font-bold text-white/90">{project.title.charAt(0)}</span>
          <span className="text-sm font-bold tracking-widest uppercase text-cyan-300/80 mt-2">Featured build</span>
        </div>
        <motion.div
          className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <Button
            href={project.liveUrl}
            variant="primary"
            size="sm"
            icon={ExternalLink}
          >
            Live
          </Button>
          {project.githubUrl !== "#" && (
            <Button
              href={project.githubUrl}
              variant="secondary"
              size="sm"
              icon={Github}
            >
              Code
            </Button>
          )}
        </motion.div>
      </div>

      {/* Project Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-white mb-2">
          {project.title}
        </h3>
        
        <p className="text-slate-400 text-xs mb-4 font-medium line-clamp-3">
          {project.description}
        </p>

        {/* Role & Responsibilities */}
        <div className="space-y-3 mb-4 text-sm">
          <p className="text-slate-700 dark:text-slate-300 font-medium">
            <span className="font-bold text-slate-900 dark:text-slate-100">Role:</span> {project.role}
          </p>
          
          {project.responsibilities && project.responsibilities.length > 0 && (
            <div>
              <span className="font-bold text-slate-900 dark:text-slate-100">Responsibilities:</span>
              <ul className="list-disc pl-5 mt-1 space-y-1 text-slate-400 font-medium line-clamp-4">
                {project.responsibilities.slice(0, 4).map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
                {project.responsibilities.length > 4 && (
                  <li>+ {project.responsibilities.length - 4} more...</li>
                )}
              </ul>
            </div>
          )}

          <p className="text-slate-600 dark:text-slate-400 font-medium">
            ✓ {project.outcome}
          </p>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs px-3 py-1 rounded-md bg-slate-900 text-slate-300 font-semibold border border-slate-800"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mt-6">
          <Button
            href={project.liveUrl}
            variant="primary"
            size="sm"
            className="flex-1"
            icon={ExternalLink}
          >
            View Live
          </Button>
          {project.githubUrl !== "#" && (
            <Button
              href={project.githubUrl}
              variant="secondary"
              size="sm"
              className="flex-1"
              icon={Github}
            >
              Code
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
