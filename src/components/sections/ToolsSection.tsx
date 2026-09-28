import React, { useState } from 'react';
import { webTools } from '../../data/toolsData';
import { WebTool } from '../../types';
import { Wrench, ExternalLink, Copy, Check, Terminal } from 'lucide-react';

export const ToolsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = ['All', 'Editor', 'Version Control', 'Design', 'DevTools', 'API', 'Cloud/Hosting', 'Database'];

  const filteredTools = selectedCategory === 'All'
    ? webTools
    : webTools.filter(t => t.category === selectedCategory);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-8 py-6">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400">
          <Wrench className="w-4 h-4" />
          <span>Industry Standard Tooling</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-1">
          Essential Developer Tools & Workflows
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 max-w-3xl leading-relaxed">
          Master the essential suite of developer tools used daily in production engineering: editors, design handoffs, browser inspection, API mocking, and cloud hosting.
        </p>
      </div>

      {/* Category filter pills */}
      <div className="flex flex-wrap gap-1.5 p-1 bg-slate-100 dark:bg-slate-900 rounded-xl w-fit">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition ${
              selectedCategory === cat
                ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Tool Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredTools.map((tool) => (
          <div
            key={tool.id}
            className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-bold">
                    {tool.category}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-0.5">
                    {tool.name}
                  </h3>
                </div>
                <a
                  href={tool.officialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs text-slate-500 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <span>Official Site</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Purpose */}
              <div>
                <h4 className="text-xs font-semibold text-slate-700 dark:text-slate-300">Core Purpose</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                  {tool.purpose}
                </p>
              </div>

              {/* Installation */}
              <div>
                <h4 className="text-xs font-semibold text-slate-700 dark:text-slate-300">How to Install</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                  {tool.installation}
                </p>
              </div>

              {/* Usage Guide */}
              <div>
                <h4 className="text-xs font-semibold text-slate-700 dark:text-slate-300">How to Use</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                  {tool.usageGuide}
                </p>
              </div>

              {/* Real World Example */}
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-xs">
                <span className="font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                  Real-World Industry Scenario:
                </span>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {tool.realWorldExample}
                </p>
              </div>

              {/* Terminal / Code Snippet */}
              <div className="rounded-lg overflow-hidden border border-slate-800 bg-slate-950 text-slate-100">
                <div className="flex items-center justify-between px-3 py-1.5 bg-slate-900 border-b border-slate-800 text-[10px] font-mono text-slate-400">
                  <span className="flex items-center gap-1">
                    <Terminal className="w-3 h-3" />
                    <span>Quick Command / Config</span>
                  </span>
                  <button
                    onClick={() => handleCopy(tool.id, tool.codeOrCommand)}
                    className="flex items-center gap-1 hover:text-white"
                  >
                    {copiedId === tool.id ? (
                      <Check className="w-3 h-3 text-emerald-400" />
                    ) : (
                      <Copy className="w-3 h-3" />
                    )}
                    <span>{copiedId === tool.id ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <div className="p-3 overflow-x-auto text-[11px] font-mono leading-relaxed">
                  <pre className="whitespace-pre">{tool.codeOrCommand}</pre>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
