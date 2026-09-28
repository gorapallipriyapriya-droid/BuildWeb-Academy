import React, { useState } from 'react';
import { learningResources, ResourceItem } from '../../data/resourcesData';
import { Bookmark, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export const ResourcesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Free Courses', 'Official Documentation', 'YouTube Channels', 'Coding Platforms', 'Open Source'];

  const filteredResources = selectedCategory === 'All'
    ? learningResources
    : learningResources.filter(r => r.category === selectedCategory);

  return (
    <div className="space-y-10 py-6">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18181B] text-cyan-400 text-xs font-bold uppercase tracking-wider mb-3 border border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
          <Bookmark className="w-3.5 h-3.5 text-cyan-400" />
          <span>Curated Ecosystem</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Learning Resources & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">Documentation</span>
        </h1>
        <p className="text-base text-zinc-400 mt-2 max-w-3xl leading-relaxed">
          The best free developer education resources hand-picked by senior software engineers: MDN docs, renowned video channels, interactive problem-solving websites, and open-source repositories to make your first GitHub pull request.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-1.5 p-1.5 bg-[#111111] rounded-2xl w-fit border border-white/[0.08]">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all duration-200 cursor-pointer ${
              selectedCategory === cat
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-[0_0_15px_rgba(59,130,246,0.4)]'
                : 'text-zinc-400 hover:text-white hover:bg-[#18181B]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Resource Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map((res) => (
          <motion.div
            key={res.name}
            whileHover={{ y: -4 }}
            className="p-6 rounded-3xl border border-white/[0.08] bg-[#111111] shadow-[0_0_20px_rgba(0,0,0,0.6)] flex flex-col justify-between hover:border-blue-500/40 hover:shadow-[0_0_25px_rgba(59,130,246,0.15)] transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between text-xs text-zinc-400 mb-2.5">
                <span className="font-mono text-cyan-400 text-[11px] font-semibold">{res.category}</span>
                {res.badge && (
                  <span className="font-bold text-[10px] text-purple-400 px-2.5 py-0.5 rounded-full bg-[#18181B] border border-purple-500/20">
                    {res.badge}
                  </span>
                )}
              </div>

              <h3 className="text-lg font-bold text-white mb-2">
                {res.name}
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                {res.description}
              </p>
            </div>

            <a
              href={res.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-white/[0.08] bg-[#18181B] hover:bg-[#202024] hover:border-blue-500/50 text-xs font-semibold text-white transition cursor-pointer"
            >
              <span>Visit Official Platform</span>
              <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
