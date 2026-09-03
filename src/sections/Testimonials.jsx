import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import TestimonialCard from '../components/TestimonialCard';
import { testimonials } from '../data/portfolioData';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-14 md:py-20 bg-[#050811]/80 border-y border-slate-900">
      <div className="section-container">
        <SectionHeading
          title="What People Say"
          subtitle="A glimpse into how I collaborate and contribute to a team."
        />

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
      </div>
    </section>
  );
}
