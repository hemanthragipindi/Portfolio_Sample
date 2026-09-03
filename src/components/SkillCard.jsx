import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

export default function SkillCard({ name, icon: iconName, level = 80, featured = false }) {
  const Icon = Icons[iconName] || Icons.Code;

  return (
    <motion.div
      className={`group cursor-pointer border rounded-lg p-3 transition-colors ${featured ? 'border-violet-500/50 bg-violet-500/[0.07] shadow-[0_0_18px_rgba(124,58,237,0.18)]' : 'border-transparent hover:border-violet-500/30'}`}
      whileHover={{ x: 3 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="flex items-center justify-between mb-3"
      >
        <Icon 
          size={18}
          className="text-violet-400 group-hover:text-cyan-300 transition-colors"
        />
        <h3 className="text-sm font-bold text-slate-200 tracking-tight flex-1 ml-2">{name}</h3>
        <span className="text-xs text-violet-300">{level}%</span>
      </motion.div>
      <div className="h-1.5 rounded-full bg-slate-900 overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-indigo-400 to-violet-600"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        />
      </div>
    </motion.div>
  );
}
