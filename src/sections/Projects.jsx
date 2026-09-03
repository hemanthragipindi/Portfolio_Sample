import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="section-container">
        <SectionHeading
          title="Featured Projects"
          number="04."
          subtitle="Selected work across product development, APIs, infrastructure, and delivery."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {/* View More CTA */}
        <motion.div
          className="text-center mt-16 border-t border-slate-900 pt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-600 dark:text-slate-400 text-lg mb-6 font-medium">
            More experiments, learning projects, and contributions live on GitHub.
          </p>
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-slate-700 dark:bg-slate-800 text-white font-semibold rounded-md hover:bg-slate-800 dark:hover:bg-slate-700 hover:shadow-md transition-all duration-300 border border-slate-600 dark:border-slate-700"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Visit My GitHub →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
