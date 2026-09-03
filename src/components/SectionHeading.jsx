import { motion } from 'framer-motion';

export default function SectionHeading({ title, subtitle, centered = true, number = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: '-100px' }}
      className={`section-title-wrap ${centered ? 'text-center' : ''}`}
    >
      <h2 className="section-heading"><span className="section-number">{number}</span> <span className="gradient-text">{title}</span></h2>
      {subtitle && <p className="section-subheading">{subtitle}</p>}
    </motion.div>
  );
}
