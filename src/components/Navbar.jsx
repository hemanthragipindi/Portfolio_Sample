import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks, personalInfo, socialLinks } from '../data/portfolioData';
import Button from './Button';

export default function Navbar({ theme, setTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-[#03050b]/95 border-b border-slate-900"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-[76px]">
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center gap-2 font-bold text-lg text-white"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>{personalInfo.name.split(' ')[0]}<span className="text-violet-500"> Hemanth Reddy</span></span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <motion.a
                key={link.id}
                href={link.href}
                className="text-slate-400 hover:text-violet-400 transition-colors font-bold text-xs tracking-wider"
                whileHover={{ y: -1 }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* Contact Button - Desktop */}
            <Button
              href="#contact"
              variant="primary"
              size="sm"
              className="hidden sm:flex"
            >
              Contact
            </Button>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-slate-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-slate-200 dark:border-slate-800"
            >
              <div className="py-4 space-y-3">
                {navLinks.map((link) => (
                  <motion.a
                    key={link.id}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-md transition-colors font-medium text-sm"
                    whileHover={{ x: 4 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
                <Button
                  href="#contact"
                  variant="primary"
                  className="w-full mx-4 mt-2"
                  onClick={() => setIsOpen(false)}
                >
                  Get in Touch
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
