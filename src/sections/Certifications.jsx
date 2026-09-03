import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import CertificationCard from '../components/CertificationCard';
import { certifications } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="py-14 md:py-20">
      <div className="section-container">
        <SectionHeading
          title="Certifications"
          subtitle="Focused learning that strengthens my engineering practice."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <CertificationCard certification={cert} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
