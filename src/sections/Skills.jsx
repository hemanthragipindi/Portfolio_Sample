import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import SkillCard from '../components/SkillCard';
import { skills } from '../data/portfolioData';
import { Code2, Layers, Shield, Cloud, Users, Wrench } from 'lucide-react';

export default function Skills() {
  const categoryTitles = {
    frontend: 'Programming',
    backend: 'Frameworks',
    apiTesting: 'Cyber Tools',
    devops: 'Platforms',
    leadership: 'Soft Skills',
    tools: 'Tools',
  };

  const categoryIcons = {
    frontend: Code2,
    backend: Layers,
    apiTesting: Shield,
    devops: Cloud,
    leadership: Users,
    tools: Wrench,
  };

  const skillCategories = Object.entries(skills).map(([key, items]) => ({
    key,
    title: categoryTitles[key] || key,
    items,
    Icon: categoryIcons[key] || Code2,
  }));

  return (
    <section id="skills" className="py-14 md:py-16 lg:py-24">
      <div className="section-container">
        <SectionHeading
          title="Skills & Proficiency"
          number="02."
          subtitle="Technologies and tools I work with"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIdx * 0.1 }}
              viewport={{ once: true }}
              className="skill-panel rounded-2xl border border-slate-800 bg-[#0b0e18]/90 p-8 min-h-[430px] shadow-[0_20px_50px_rgba(0,0,0,0.18)] hover:border-violet-500/40 transition-colors"
            >
              <div className="flex items-center gap-3 text-white mb-8">
                <category.Icon size={28} className="text-violet-500" strokeWidth={2.5} />
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              <div className="space-y-5">
                {category.items.slice(0, 4).map((skill, skillIdx) => (
                  <SkillCard
                    key={skill.name}
                    name={skill.name}
                    icon={skill.icon}
                    level={Math.max(62, 92 - skillIdx * 7)}
                    featured={skillIdx === 0 || (category.key === 'backend' && skillIdx === 2)}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}
