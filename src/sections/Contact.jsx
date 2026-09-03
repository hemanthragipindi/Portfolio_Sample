import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Loader } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { personalInfo, socialLinks } from '../data/portfolioData';
import * as Icons from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim()) {
      setSubmitStatus({ type: 'error', message: 'Please enter your name' });
      return;
    }

    if (!validateEmail(formData.email)) {
      setSubmitStatus({ type: 'error', message: 'Please enter a valid email' });
      return;
    }

    if (!formData.message.trim()) {
      setSubmitStatus({ type: 'error', message: 'Please enter a message' });
      return;
    }

    setIsSubmitting(true);

    // Placeholder: Form submission handler
    // In a real application, this would send data to a backend or service like:
    // - EmailJS: https://www.emailjs.com/
    // - Formspree: https://formspree.io/
    // - Web3Forms: https://web3forms.com/
    // - SendGrid: https://sendgrid.com/
    // - Custom backend endpoint

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Show success message
      setSubmitStatus({
        type: 'success',
        message: 'Thanks for reaching out! I\'ll get back to you soon.',
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        message: '',
      });

      // Clear message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Something went wrong. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-14 md:py-20 bg-[#050811]/80 border-y border-slate-900">
      <div className="section-container">
        <SectionHeading
          title="Get in Touch"
          number="06."
          subtitle="Have a product idea, technical challenge, or collaboration in mind? Let’s talk."
        />

        <div className="grid md:grid-cols-2 gap-10 md:gap-12 max-w-4xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4">
                Let’s work together
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                I’m open to conversations about full-stack development, backend systems, application security, and early-stage product work. Send a note and I’ll get back to you as soon as possible.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              <motion.a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-4 p-4 rounded-lg bg-[#0b0e18] hover:border-violet-500/60 transition-colors border border-slate-800"
                whileHover={{ x: 4 }}
              >
                <div className="w-9 h-9 rounded-full bg-violet-500/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-violet-300" size={17} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                    Email
                  </p>
                  <p className="text-slate-600 dark:text-slate-400">
                    {personalInfo.email}
                  </p>
                </div>
              </motion.a>

              {socialLinks.map((social) => {
                const Icon = Icons[social.icon];
                return (
                  <motion.a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-[#0b0e18] hover:border-violet-500/60 transition-colors border border-slate-800"
                    whileHover={{ x: 4 }}
                  >
                    <div className="w-9 h-9 rounded-full bg-violet-500/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="text-violet-300" size={17} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                        {social.name}
                      </p>
                      <p className="text-slate-600 dark:text-slate-400 truncate text-sm">
                        {social.url.replace(/^(https?:\/\/|mailto:)/, '')}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Location */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
              <p className="text-slate-600 dark:text-slate-400 font-medium">
                <span className="font-semibold text-slate-900 dark:text-slate-100">Location:</span> {personalInfo.location}
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="card p-6 border border-slate-800 bg-[#0b0e18]/90"
          >
            <div className="space-y-6">
              {/* Name Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <label className="block text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-md border-2 border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:border-slate-600 dark:focus:border-slate-500 transition-colors"
                  disabled={isSubmitting}
                />
              </motion.div>

              {/* Email Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
              >
                <label className="block text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 rounded-md border-2 border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:border-slate-600 dark:focus:border-slate-500 transition-colors"
                  disabled={isSubmitting}
                />
              </motion.div>

              {/* Message Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <label className="block text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or question..."
                  rows="5"
                  className="w-full px-4 py-3 rounded-md border-2 border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:border-slate-600 dark:focus:border-slate-500 transition-colors resize-none"
                  disabled={isSubmitting}
                />
              </motion.div>

              {/* Status Message */}
              <AnimatePresence>
                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`p-4 rounded-md font-medium text-sm ${
                      submitStatus.type === 'success'
                        ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400'
                        : 'bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-400'
                    }`}
                  >
                    {submitStatus.message}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-slate-700 text-white font-semibold rounded-md hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                {isSubmitting ? (
                  <>
                    <Loader size={20} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </motion.button>
            </div>

            <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-6">
              I'll get back to you within 24 hours. Thank you for reaching out!
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
