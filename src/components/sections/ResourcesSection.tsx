import React, { useState } from 'react';
import { learningResources, ResourceItem } from '../../data/resourcesData';
import { Bookmark, ExternalLink, Globe, Youtube, Code, GitPullRequest } from 'lucide-react';

export const ResourcesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Free Courses', 'Official Documentation', 'YouTube Channels', 'Coding Platforms', 'Open Source'];

  const filteredResources = selectedCategory === 'All'
    ? learningResources
    : learningResources.filter(r => r.category === selectedCategory);

  return (
    <div className="space-y-8 py-6">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400">
          <Bookmark className="w-4 h-4" />
          <span>Curated Ecosystem</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-1">
          High-Quality Learning Resources & Documentation
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 max-w-3xl leading-relaxed">
          The best free developer education resources hand-picked by senior software engineers. MDN docs, renowned video channels, interactive problem-solving websites, and open-source repositories to make your first GitHub pull request.
        </p>
      </div>

      {/* Filter Tabs */}
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

      {/* Resource Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map((res) => (
          <div
            key={res.name}
            className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs flex flex-col justify-between hover:border-blue-400 dark:hover:border-blue-600 transition"
          >
            <div>
              <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                <span>{res.category}</span>
                {res.badge && (
                  <span className="font-semibold text-[10px] text-blue-600 dark:text-blue-400">
                    {res.badge}
                  </span>
                )}
              </div>

              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                {res.name}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                {res.description}
              </p>
            </div>

            <a
              href={res.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 w-full py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-850 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-medium text-slate-800 dark:text-slate-200 transition"
            >
              <span>Visit Official Platform</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
