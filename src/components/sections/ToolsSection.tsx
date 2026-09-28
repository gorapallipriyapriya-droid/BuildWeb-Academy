import React, { useState } from 'react';
import { webTools } from '../../data/toolsData';
import { Wrench, ExternalLink, Copy, Check, Terminal, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const ToolsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const categories = ['All', 'Editor', 'Version Control', 'Design', 'DevTools', 'API', 'Cloud/Hosting', 'Database'];

  const filteredTools = selectedCategory === 'All'
    ? webTools
    : webTools.filter(t => t.category === selectedCategory);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    showToast('Command copied to clipboard!');
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-10 py-6 relative">
      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed top-20 right-6 z-50 flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#18181B] text-white text-xs font-semibold shadow-[0_0_25px_rgba(0,0,0,0.9)] border border-emerald-500/40"
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18181B] text-cyan-400 text-xs font-bold uppercase tracking-wider mb-3 border border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
          <Wrench className="w-3.5 h-3.5 text-cyan-400" />
          <span>Industry Standard Tooling</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Essential Developer <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">Tools & Workflows</span>
        </h1>
        <p className="text-base text-zinc-400 mt-2 max-w-3xl leading-relaxed">
          Master the essential suite of developer tools used daily in production engineering: editors, design handoffs, browser inspection, API mocking, and cloud hosting.
        </p>
      </div>

      {/* Category filter pills */}
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

      {/* Tool Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredTools.map((tool) => (
          <motion.div
            key={tool.id}
            whileHover={{ y: -4 }}
            className="bg-[#111111] p-7 rounded-3xl border border-white/[0.08] shadow-[0_0_25px_rgba(0,0,0,0.6)] hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-300 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-extrabold px-2.5 py-0.5 rounded-full bg-[#18181B] border border-cyan-500/20">
                    {tool.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1.5">
                    {tool.name}
                  </h3>
                </div>
                <a
                  href={tool.officialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-semibold text-zinc-400 hover:text-cyan-400 transition"
                >
                  <span>Official Docs</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Purpose */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-300">Core Purpose</h4>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1 leading-relaxed">
                  {tool.purpose}
                </p>
              </div>

              {/* Installation */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-300">How to Install</h4>
                <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                  {tool.installation}
                </p>
              </div>

              {/* Usage Guide */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-300">How to Use</h4>
                <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                  {tool.usageGuide}
                </p>
              </div>

              {/* Real World Example */}
              <div className="p-4 rounded-2xl bg-[#18181B] border border-white/[0.06] text-xs">
                <span className="font-bold text-zinc-200 block mb-1">
                  Real-World Industry Scenario:
                </span>
                <p className="text-zinc-400 leading-relaxed">
                  {tool.realWorldExample}
                </p>
              </div>

              {/* Terminal / Code Snippet */}
              <div className="rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0A0A0A] text-zinc-100 shadow-inner">
                <div className="flex items-center justify-between px-3.5 py-2 bg-[#000000] border-b border-white/[0.08] text-[10px] font-mono text-zinc-400">
                  <span className="flex items-center gap-1.5">
                    <Terminal className="w-3 h-3 text-blue-400" />
                    <span className="text-zinc-300 font-semibold">Quick Command / Config</span>
                  </span>
                  <button
                    onClick={() => handleCopy(tool.id, tool.codeOrCommand)}
                    className="flex items-center gap-1 text-zinc-400 hover:text-white transition cursor-pointer"
                  >
                    {copiedId === tool.id ? (
                      <Check className="w-3 h-3 text-emerald-400" />
                    ) : (
                      <Copy className="w-3 h-3" />
                    )}
                    <span>{copiedId === tool.id ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <div className="p-3.5 overflow-x-auto text-[11px] font-mono leading-relaxed text-zinc-300">
                  <pre className="whitespace-pre">{tool.codeOrCommand}</pre>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
