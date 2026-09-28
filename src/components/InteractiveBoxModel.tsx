import React, { useState } from 'react';

export const InteractiveBoxModel: React.FC = () => {
  const [contentWidth, setContentWidth] = useState(240);
  const [contentHeight, setContentHeight] = useState(100);
  const [padding, setPadding] = useState(20);
  const [border, setBorder] = useState(4);
  const [margin, setMargin] = useState(20);
  const [boxSizing, setBoxSizing] = useState<'border-box' | 'content-box'>('border-box');

  const totalCalculatedWidth = boxSizing === 'content-box'
    ? contentWidth + (padding * 2) + (border * 2)
    : contentWidth;

  const totalRenderedWidth = boxSizing === 'content-box'
    ? contentWidth + (padding * 2) + (border * 2)
    : contentWidth;

  const innerContentComputedWidth = boxSizing === 'border-box'
    ? Math.max(0, contentWidth - (padding * 2) - (border * 2))
    : contentWidth;

  return (
    <div className="my-6 p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
        <div>
          <span className="text-xs uppercase tracking-wider font-semibold text-blue-600 dark:text-blue-400">Interactive Visual Sandbox</span>
          <h4 className="text-base font-bold text-slate-900 dark:text-white mt-0.5">CSS Box Model Explorer</h4>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-500 font-mono">box-sizing:</span>
          <div className="flex items-center p-0.5 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs">
            <button
              onClick={() => setBoxSizing('border-box')}
              className={`px-2.5 py-1 rounded font-medium transition-colors ${boxSizing === 'border-box' ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-xs' : 'text-slate-600 dark:text-slate-400'}`}
            >
              border-box (Standard)
            </button>
            <button
              onClick={() => setBoxSizing('content-box')}
              className={`px-2.5 py-1 rounded font-medium transition-colors ${boxSizing === 'content-box' ? 'bg-white dark:bg-slate-700 text-amber-600 dark:text-amber-400 shadow-xs' : 'text-slate-600 dark:text-slate-400'}`}
            >
              content-box (Legacy)
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-6 items-center">
        {/* Visual Box Model Diagram */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center p-4 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 overflow-x-auto min-h-[340px]">
          {/* Margin layer */}
          <div 
            className="p-3 bg-amber-500/15 border border-dashed border-amber-400 rounded-lg text-center transition-all duration-150"
            style={{ padding: `${Math.max(12, margin * 0.7)}px` }}
          >
            <span className="text-[11px] font-mono font-semibold text-amber-700 dark:text-amber-300 block mb-1">
              MARGIN: {margin}px
            </span>

            {/* Border layer */}
            <div 
              className="p-2.5 bg-yellow-500/20 border-yellow-500/50 rounded-md transition-all duration-150"
              style={{ borderWidth: `${border}px`, borderStyle: 'solid' }}
            >
              <span className="text-[11px] font-mono font-semibold text-yellow-800 dark:text-yellow-200 block mb-1">
                BORDER: {border}px
              </span>

              {/* Padding layer */}
              <div 
                className="bg-emerald-500/20 border border-dashed border-emerald-400 rounded transition-all duration-150"
                style={{ padding: `${Math.max(10, padding * 0.7)}px` }}
              >
                <span className="text-[11px] font-mono font-semibold text-emerald-800 dark:text-emerald-300 block mb-1">
                  PADDING: {padding}px
                </span>

                {/* Content layer */}
                <div 
                  className="bg-blue-500/25 border border-blue-500 rounded flex flex-col items-center justify-center text-center transition-all duration-150"
                  style={{ 
                    width: `${Math.max(120, innerContentComputedWidth * 0.8)}px`, 
                    height: `${Math.max(60, contentHeight * 0.8)}px` 
                  }}
                >
                  <span className="text-xs font-mono font-bold text-blue-800 dark:text-blue-200">
                    CONTENT
                  </span>
                  <span className="text-[10px] font-mono text-blue-700 dark:text-blue-300 tabular-nums">
                    {innerContentComputedWidth}px × {contentHeight}px
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sliders and Calculations */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="flex justify-between text-xs">
              <span className="font-semibold text-slate-700 dark:text-slate-300">Declared Width</span>
              <span className="font-mono text-blue-600 dark:text-blue-400 tabular-nums">{contentWidth}px</span>
            </div>
            <input
              type="range"
              min={180}
              max={360}
              value={contentWidth}
              onChange={(e) => setContentWidth(Number(e.target.value))}
              className="w-full accent-blue-600"
            />

            <div className="flex justify-between text-xs">
              <span className="font-semibold text-emerald-700 dark:text-emerald-400">Padding</span>
              <span className="font-mono text-emerald-600 dark:text-emerald-400 tabular-nums">{padding}px</span>
            </div>
            <input
              type="range"
              min={0}
              max={48}
              value={padding}
              onChange={(e) => setPadding(Number(e.target.value))}
              className="w-full accent-emerald-600"
            />

            <div className="flex justify-between text-xs">
              <span className="font-semibold text-yellow-700 dark:text-yellow-400">Border</span>
              <span className="font-mono text-yellow-600 dark:text-yellow-400 tabular-nums">{border}px</span>
            </div>
            <input
              type="range"
              min={0}
              max={16}
              value={border}
              onChange={(e) => setBorder(Number(e.target.value))}
              className="w-full accent-yellow-600"
            />

            <div className="flex justify-between text-xs">
              <span className="font-semibold text-amber-700 dark:text-amber-400">Margin</span>
              <span className="font-mono text-amber-600 dark:text-amber-400 tabular-nums">{margin}px</span>
            </div>
            <input
              type="range"
              min={0}
              max={40}
              value={margin}
              onChange={(e) => setMargin(Number(e.target.value))}
              className="w-full accent-amber-600"
            />
          </div>

          {/* Math summary */}
          <div className="p-3.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs space-y-1.5">
            <div className="flex justify-between font-mono">
              <span className="text-slate-500">Rendered Element Width:</span>
              <span className="font-bold text-slate-900 dark:text-white tabular-nums">{totalRenderedWidth}px</span>
            </div>
            <div className="flex justify-between font-mono">
              <span className="text-slate-500">Total Space Occupied (+Margin):</span>
              <span className="font-semibold text-amber-600 dark:text-amber-400 tabular-nums">{totalRenderedWidth + (margin * 2)}px</span>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 pt-1 border-t border-slate-100 dark:border-slate-800">
              {boxSizing === 'border-box'
                ? 'Under border-box, padding and border stay INSIDE the declared width, so your card never blows past its grid column!'
                : 'Under content-box, padding and borders expand the box size outwards, often creating unwanted horizontal scrollbars.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
