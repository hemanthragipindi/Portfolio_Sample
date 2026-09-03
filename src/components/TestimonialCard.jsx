import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function TestimonialCard({ testimonial }) {
  return (
    <motion.div
      className="card p-6 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
    >
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className="fill-slate-700 text-slate-700 dark:fill-slate-600 dark:text-slate-600"
          />
        ))}
      </div>

      {/* Testimonial */}
      <p className="text-slate-700 dark:text-slate-300 mb-6 italic font-medium text-sm leading-relaxed">
        "{testimonial.testimonial}"
      </p>

      {/* Profile */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-md bg-gradient-to-br from-slate-400 to-slate-600 flex items-center justify-center flex-shrink-0 border border-slate-500">
          <span className="text-white font-bold text-lg">
            {testimonial.name.charAt(0)}
          </span>
        </div>
        <div>
          <h4 className="font-bold text-slate-900 dark:text-slate-100 text-sm">
            {testimonial.name}
          </h4>
          <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">
            {testimonial.position} at {testimonial.company}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
