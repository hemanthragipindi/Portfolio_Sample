import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { GraduationCap, Award } from 'lucide-react';
import { education } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-14 md:py-20 bg-[#050811]/80 border-y border-slate-900">
      <div className="section-container">
        <SectionHeading
          title="Education"
          subtitle="The academic foundation behind my software engineering practice."
        />

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {education.map((edu, idx) => (
            <motion.div
              key={edu.id}
              className="card p-8 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              <div className="flex gap-3 sm:gap-4 mb-4">
                <div className="w-14 h-14 rounded-md bg-slate-200 dark:bg-slate-800 flex items-center justify-center flex-shrink-0 border border-slate-300 dark:border-slate-700">
                  <GraduationCap className="text-slate-700 dark:text-slate-400" size={26} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50">
                    {edu.degree}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 font-semibold text-sm">
                    {edu.field}
                  </p>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <p className="text-slate-600 dark:text-slate-400 font-medium">
                  <span className="font-bold text-slate-900 dark:text-slate-100">{edu.institution}</span>
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-500 font-medium">
                  Graduated: {edu.year}
                </p>
                {edu.cgpa && (
                  <p className="text-sm text-violet-300 font-semibold">
                    {edu.cgpa}
                  </p>
                )}
              </div>


            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
