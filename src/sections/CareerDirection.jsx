import { ArrowRight, HeartHandshake, Target, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { personalInfo } from '../data/portfolioData';

const directionCards = [
  {
    title: 'Career Goal',
    icon: Target,
    text: `I am seeking opportunities as a ${personalInfo.role} where I can build reliable products, grow with a strong engineering team, and contribute to meaningful technical work.`,
  },
  {
    title: 'Value Proposition',
    icon: HeartHandshake,
    text: 'I bring end-to-end ownership across interfaces, backend systems, APIs, databases, cloud infrastructure, and team coordination, helping ideas move from planning to dependable production software.',
  },
  {
    title: 'Professional Closing',
    icon: Trophy,
    text: 'I am ready to contribute with curiosity, accountability, and practical engineering judgment while continuing to learn and deliver measurable results.',
  },
];

export default function CareerDirection() {
  return (
    <section id="career-direction" className="py-14 md:py-20">
      <div className="section-container">
        <SectionHeading
          title="Career Direction"
          subtitle="The kind of work I am prepared to pursue and the contribution I aim to make."
        />

        <div className="grid gap-5 md:grid-cols-3 max-w-5xl mx-auto">
          {directionCards.map(({ title, icon: Icon, text }, index) => (
            <motion.article
              key={title}
              className="card p-6 border border-slate-800 hover:border-violet-500/70"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-11 h-11 mb-5 rounded-lg bg-violet-500/10 text-violet-300 flex items-center justify-center">
                <Icon size={22} />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{text}</p>
              <ArrowRight size={18} className="mt-5 text-violet-300" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}