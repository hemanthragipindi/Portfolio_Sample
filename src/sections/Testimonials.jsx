import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import TestimonialCard from '../components/TestimonialCard';
import { testimonials } from '../data/portfolioData';

const collaborationHighlights = [
  {
    label: 'Ownership',
    text: 'Taking work from development through deployment and production support.',
  },
  {
    label: 'Communication',
    text: 'Coordinating tasks, reviewing implementations, and keeping technical work clear.',
  },
  {
    label: 'Reliability',
    text: 'Building dependable systems with thoughtful APIs, testing, and infrastructure.',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-14 md:py-20 bg-[#050811]/80 border-y border-slate-900">
      <div className="section-container">
        <SectionHeading
          title="What People Say"
          subtitle="A glimpse into how I collaborate and contribute to a team."
        />

        {testimonials.length > 0 ? (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="grid sm:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {collaborationHighlights.map(({ label, text }, index) => (
              <motion.div
                key={label}
                className="card p-5 border border-slate-800"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-xs font-mono uppercase text-violet-300 mb-3">{label}</p>
                <p className="text-sm text-slate-400 leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
