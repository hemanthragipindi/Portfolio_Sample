import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/portfolioData';
import Button from '../components/Button';
import * as Icons from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-24 pb-16 md:pt-28 relative overflow-hidden bg-transparent"
    >
      <div className="section-container flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between gap-12">
        <motion.div
          className="max-w-4xl"
          variants={container}
          initial="hidden"
          animate="visible"
        >


          <motion.p variants={item} className="text-violet-300 mb-8 text-sm font-bold">Hi, I'm</motion.p>
          <motion.h1
            variants={item}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-5 leading-[1.05] tracking-tight max-w-3xl"
          >
            {personalInfo.name}
          </motion.h1>

          <motion.div variants={item} className="mb-9 border-l-4 border-violet-500 pl-4 max-w-2xl">
            <h2 className="text-lg sm:text-2xl md:text-3xl gradient-text font-bold tracking-wide">
              {personalInfo.role}
            </h2>
          </motion.div>

          {/* Bio */}
          <motion.p variants={item} className="text-base sm:text-lg md:text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed">
            {personalInfo.introduction}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              href="#projects"
              variant="primary"
              size="lg"
            >
              View Projects
            </Button>
            <Button
              href={personalInfo.resumeUrl}
              variant="secondary"
              size="lg"
            >
              View/Download Resume
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={item} className="flex gap-4">
            {socialLinks.map((social) => {
              const Icon = Icons[social.icon];
              return (
                <motion.a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-slate-800 flex items-center justify-center text-slate-400 hover:border-violet-500 hover:text-violet-400 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.name}
                >
                  <Icon size={22} />
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>

        <motion.div
          className="flex justify-center lg:justify-end shrink-0"
          variants={item}
          initial="hidden"
          animate="visible"
        >
          <img
            src={personalInfo.image}
            alt={`${personalInfo.name} profile`}
            className="w-56 h-56 sm:w-72 sm:h-72 rounded-2xl object-contain bg-[#0b0e18] border-4 border-violet-500/50 shadow-2xl shadow-violet-950/40"
          />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="fixed bottom-8 right-8 md:right-12 z-50"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <a href="#about" className="text-slate-400 hover:text-violet-400 transition-colors border border-slate-500 p-2 rounded-full flex items-center justify-center">
          <ArrowDown size={24} />
        </a>
      </motion.div>
    </section>
  );
}
