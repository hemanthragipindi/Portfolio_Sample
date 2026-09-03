import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { achievements, expertise } from '../data/portfolioData';
import * as Icons from 'lucide-react';

const AnimatedCounter = ({ target, duration = 2 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration * 60);
    const interval = setInterval(() => {
      start += increment;
      if (start > target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(interval);
  }, [target, duration]);

  return <span>{count}</span>;
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 md:py-28">
      <div className="section-container">
        <SectionHeading
          title="Achievements & Certifications"
          number="05."
          subtitle="A few signals of consistency, curiosity, and hands-on practice."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
          {achievements.map((achievement, idx) => (
            <motion.div
              key={achievement.id}
              className="text-center card p-8 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              <motion.div
                className="text-4xl md:text-5xl font-bold text-slate-700 dark:text-slate-300 mb-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: idx * 0.1 + 0.3 }}
                viewport={{ once: true }}
              >
                <AnimatedCounter target={achievement.number} />
                <span className="text-3xl md:text-4xl">+</span>
              </motion.div>
              <p className="text-slate-700 dark:text-slate-300 font-semibold text-sm">
                {achievement.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Expertise Details */}
        <motion.div
          className="mt-16 md:mt-20 pt-16 md:pt-20 border-t border-slate-200 dark:border-slate-700 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-50">
              Areas of Expertise
            </h3>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise.map((item, idx) => {
              const IconComponent = Icons[item.icon] || Icons.Code;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col gap-3"
                >
                  <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-lg flex items-center justify-center mb-2">
                    <IconComponent size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-slate-50">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
