import { motion } from 'framer-motion';
import { navLinks, personalInfo, socialLinks } from '../data/portfolioData';
import * as Icons from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="bg-[#03050b] text-slate-50 py-10 md:py-14 border-t border-slate-900">
      <div className="section-container">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-2 text-white">{personalInfo.name}</h3>
            <p className="text-slate-400 font-medium max-w-xs">{personalInfo.tagline}</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4 text-slate-100">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.slice(0, 3).map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-slate-200 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* More Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4 text-slate-100">More</h4>
            <ul className="space-y-2">
              {navLinks.slice(3).map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-slate-200 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4 text-slate-100">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = Icons[social.icon];
                return (
                  <motion.a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-md bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors text-slate-300 hover:text-slate-100"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.name}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-slate-800 mb-8" />

        {/* Bottom */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm font-medium"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p>&copy; {currentYear} {personalInfo.name}. All rights reserved.</p>
          <p className="mt-4 md:mt-0">
            Available for meaningful work and thoughtful collaborations.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
