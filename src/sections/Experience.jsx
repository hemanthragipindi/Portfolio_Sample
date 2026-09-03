import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import ExperienceItem from '../components/ExperienceItem';
import { experience } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-14 md:py-16 lg:py-24">
      <div className="section-container">
        <SectionHeading
          title="Work Experience"
          subtitle="Hands-on experience building, shipping, and supporting production software."
        />

        <div className="max-w-3xl mx-auto">
          {experience.map((exp, idx) => (
            <ExperienceItem
              key={exp.id}
              experience={exp}
              isLast={idx === experience.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
