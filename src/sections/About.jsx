import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const strengths = [
    'Full-stack product development',
    'Backend systems and data modeling',
    'REST APIs and OpenAPI workflows',
    'Cloud deployment and production support',
    'Application security and reliability',
    'Technical leadership and collaboration',
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-[#050811]/80 border-y border-slate-900">
      <div className="section-container">
        <SectionHeading
          title="About Me"
          number="01."
          subtitle="A practical engineer focused on building dependable software from idea to production."
        />

        <div className="max-w-4xl mx-auto items-center mb-8 sm:mb-12">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4">
                  A builder who stays close to the whole system
                </h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                  I am a {personalInfo.role} who enjoys turning complex requirements into clear, maintainable products. I work across React interfaces, Python services, PostgreSQL data models, REST APIs, and the tooling that keeps releases dependable.
                </p>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-medium mt-4">
                  My approach is grounded in ownership: document the API, validate the data, automate the deployment, and stay available when the system is live. That mindset helps me contribute as both an individual developer and a technical lead.
                </p>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-50 mb-5">
                  Areas of Expertise
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {strengths.map((strength, idx) => (
                    <motion.div
                      key={strength}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 bg-[#0b0e18] p-4 rounded-lg border border-slate-800 hover:border-violet-500/50 transition-colors"
                    >
                      <span className="text-indigo-500 dark:text-indigo-400 text-xl font-bold">✓</span>
                      <span className="text-slate-700 dark:text-slate-300 font-semibold text-sm">{strength}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
