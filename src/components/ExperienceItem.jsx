import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

export default function ExperienceItem({ experience, isLast }) {
  return (
    <motion.div
      className="flex gap-4 md:gap-6 mb-8"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {/* Timeline Marker */}
      <div className="flex flex-col items-center">
        <motion.div
          className="w-10 h-10 rounded-full bg-[#0b0e18] flex items-center justify-center shadow-sm border border-violet-500/70"
          whileInView={{ scale: 1 }}
          initial={{ scale: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <Briefcase size={22} className="text-violet-300" />
        </motion.div>
        {!isLast && (
          <motion.div
            className="w-px h-24 bg-gradient-to-b from-violet-500/60 to-transparent"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            style={{ originY: 0 }}
          />
        )}
      </div>

      {/* Content */}
      <div className="pb-6 flex-1 rounded-xl border border-violet-500/20 bg-gradient-to-br from-[#17243c] via-[#171936] to-[#251343] p-6 shadow-[0_15px_35px_rgba(67,40,130,0.16)]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
            <h3 className="text-lg font-bold text-white">
              {experience.jobTitle}
            </h3>
            <span className="text-xs text-violet-200 font-medium font-mono">
              {experience.startDate} - {experience.endDate}
            </span>
          </div>

            <p className="text-slate-300 font-semibold mb-5 text-sm">
            {experience.company}
          </p>

          <div className="space-y-3">
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 text-sm">
                Responsibilities:
              </h4>
              <ul className="space-y-1 text-slate-600 dark:text-slate-400">
                {experience.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex gap-2 text-sm font-medium">
                    <span className="text-slate-500 dark:text-slate-500 flex-shrink-0">
                      •
                    </span>
                    {resp}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 text-sm">
                Key Achievements:
              </h4>
              <ul className="space-y-1 text-slate-600 dark:text-slate-400">
                {experience.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex gap-2 text-sm font-medium">
                    <span className="text-slate-500 dark:text-slate-500 flex-shrink-0">
                      ✓
                    </span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
