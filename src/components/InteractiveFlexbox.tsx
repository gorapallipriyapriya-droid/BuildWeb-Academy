import React, { useState } from 'react';
import { Copy, Check, Plus, Minus } from 'lucide-react';

export const InteractiveFlexbox: React.FC = () => {
  const [flexDirection, setFlexDirection] = useState<'row' | 'row-reverse' | 'column' | 'column-reverse'>('row');
  const [justifyContent, setJustifyContent] = useState<'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly'>('space-between');
  const [alignItems, setAlignItems] = useState<'stretch' | 'flex-start' | 'center' | 'flex-end'>('center');
  const [flexWrap, setFlexWrap] = useState<'nowrap' | 'wrap'>('nowrap');
  const [gap, setGap] = useState<number>(16);
  const [itemCount, setItemCount] = useState<number>(4);
  const [copied, setCopied] = useState<boolean>(false);

  const generatedCss = `.container {
  display: flex;
  flex-direction: ${flexDirection};
  justify-content: ${justifyContent};
  align-items: ${alignItems};
  flex-wrap: ${flexWrap};
  gap: ${gap}px;
}`;

  const copySnippet = () => {
    navigator.clipboard.writeText(generatedCss);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-6 p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
        <div>
          <span className="text-xs uppercase tracking-wider font-semibold text-blue-600 dark:text-blue-400">Interactive Visual Sandbox</span>
          <h4 className="text-base font-bold text-slate-900 dark:text-white mt-0.5">Flexbox Playground</h4>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setItemCount(prev => Math.max(2, prev - 1))}
            className="p-1 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded"
            title="Remove item"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="text-xs font-mono text-slate-600 dark:text-slate-300 tabular-nums">
            {itemCount} items
          </span>
          <button
            onClick={() => setItemCount(prev => Math.min(8, prev + 1))}
            className="p-1 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded"
            title="Add item"
          >
            <Plus className="w-4 h-4" />
          </button>
          <button
            onClick={copySnippet}
            className="flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-md border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 ml-2"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied' : 'Copy CSS'}</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-6">
        {/* Interactive Canvas Viewport */}
        <div className="lg:col-span-8 flex flex-col justify-center min-h-[300px] p-4 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
          <div
            className="w-full min-h-[240px] p-4 rounded-lg border-2 border-dashed border-blue-400/60 bg-blue-50/20 dark:bg-blue-950/20 transition-all duration-200"
            style={{
              display: 'flex',
              flexDirection,
              justifyContent,
              alignItems,
              flexWrap,
              gap: `${gap}px`
            }}
          >
            {Array.from({ length: itemCount }).map((_, i) => (
              <div
                key={i}
                className="w-16 h-16 rounded-lg bg-blue-600 text-white font-mono text-xs font-bold flex flex-col items-center justify-center shadow-sm select-none transition-all duration-200 hover:scale-105"
                style={{
                  height: alignItems === 'stretch' ? 'auto' : `${56 + (i % 3) * 12}px`
                }}
              >
                <span>Item</span>
                <span className="text-blue-200 text-[11px] tabular-nums">#{i + 1}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Control deck */}
        <div className="lg:col-span-4 space-y-3.5 text-xs">
          <div>
            <label className="font-semibold text-slate-700 dark:text-slate-300 block mb-1">
              flex-direction
            </label>
            <select
              value={flexDirection}
              onChange={(e: any) => setFlexDirection(e.target.value)}
              className="w-full p-1.5 rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
            >
              <option value="row">row (horizontal)</option>
              <option value="row-reverse">row-reverse</option>
              <option value="column">column (vertical)</option>
              <option value="column-reverse">column-reverse</option>
            </select>
          </div>

          <div>
            <label className="font-semibold text-slate-700 dark:text-slate-300 block mb-1">
              justify-content (Main Axis)
            </label>
            <select
              value={justifyContent}
              onChange={(e: any) => setJustifyContent(e.target.value)}
              className="w-full p-1.5 rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
            >
              <option value="flex-start">flex-start</option>
              <option value="center">center</option>
              <option value="flex-end">flex-end</option>
              <option value="space-between">space-between</option>
              <option value="space-around">space-around</option>
              <option value="space-evenly">space-evenly</option>
            </select>
          </div>

          <div>
            <label className="font-semibold text-slate-700 dark:text-slate-300 block mb-1">
              align-items (Cross Axis)
            </label>
            <select
              value={alignItems}
              onChange={(e: any) => setAlignItems(e.target.value)}
              className="w-full p-1.5 rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
            >
              <option value="center">center</option>
              <option value="flex-start">flex-start</option>
              <option value="flex-end">flex-end</option>
              <option value="stretch">stretch</option>
            </select>
          </div>

          <div className="flex items-center justify-between pt-1">
            <label className="font-semibold text-slate-700 dark:text-slate-300">
              flex-wrap
            </label>
            <button
              onClick={() => setFlexWrap(prev => (prev === 'nowrap' ? 'wrap' : 'nowrap'))}
              className={`px-2.5 py-1 rounded text-[11px] font-mono font-medium transition ${flexWrap === 'wrap' ? 'bg-blue-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}`}
            >
              {flexWrap}
            </button>
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="font-semibold text-slate-700 dark:text-slate-300">
                gap
              </label>
              <span className="font-mono text-blue-600 dark:text-blue-400 tabular-nums">{gap}px</span>
            </div>
            <input
              type="range"
              min={0}
              max={40}
              value={gap}
              onChange={(e) => setGap(Number(e.target.value))}
              className="w-full accent-blue-600"
            />
          </div>

          <div className="p-2.5 rounded-lg bg-slate-900 text-slate-200 font-mono text-[11px] overflow-x-auto">
            <pre className="whitespace-pre">{generatedCss}</pre>
          </div>
        </div>
      </div>
    </div>
  );
};
