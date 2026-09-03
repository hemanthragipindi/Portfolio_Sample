import { motion } from 'framer-motion';
import { Award, Eye } from 'lucide-react';

export default function CertificationCard({ certification }) {
  const category = certification.name.toLowerCase().includes('security') ? 'Cybersecurity' : certification.name.toLowerCase().includes('cloud') ? 'Networking' : certification.name.toLowerCase().includes('python') || certification.name.toLowerCase().includes('programming') ? 'Programming' : 'Others';
  
  return (
    <motion.div
      className="card relative min-h-[220px] p-5 border border-slate-800 hover:border-violet-500/70 transition-colors overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      <a
        href={certification.image}
        target="_blank"
        rel="noopener noreferrer"
        className="mb-5 block overflow-hidden rounded-lg border border-slate-800 bg-slate-950"
        aria-label={`Open ${certification.name} certificate`}
      >
        <img
          src={certification.image}
          alt={`${certification.name} certificate`}
          className="h-40 w-full object-cover transition-transform duration-300 hover:scale-[1.03]"
        />
      </a>
      <div className="flex items-start gap-4">
        <div className="flex items-start justify-between mb-5">
          <div className="p-2.5 bg-violet-500/10 text-violet-300 rounded-lg shrink-0">
            <Award size={21} />
          </div>
          <span className="text-[10px] px-2 py-1 rounded border border-violet-500/30 text-violet-300 font-mono">
            {category}
          </span>
        </div>
        <div className="flex-1">
          <h3 className="text-base font-bold text-white mb-2 leading-snug">
            {certification.name}
          </h3>
          <p className="text-xs text-slate-400 font-medium mb-3">
            <span className="text-violet-300">●</span> {certification.issuer}
          </p>
          
          <div className="flex items-center justify-between mt-8 pt-3 border-t border-slate-800">
            <span className="text-[10px] text-slate-500 font-mono">{certification.year}</span>
            <a href={certification.image} target="_blank" rel="noopener noreferrer" className="text-[10px] text-violet-300 inline-flex items-center gap-1 font-mono hover:text-white transition-colors">
              Preview <Eye size={12} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
