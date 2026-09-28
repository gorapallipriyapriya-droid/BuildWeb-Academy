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

  const totalRenderedWidth = totalCalculatedWidth;

  const innerContentComputedWidth = boxSizing === 'border-box'
    ? Math.max(0, contentWidth - (padding * 2) - (border * 2))
    : contentWidth;

  return (
    <div className="my-6 p-5 rounded-xl border border-white/[0.08] bg-[#0A0A0A] shadow-xl">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/[0.08]">
        <div>
          <span className="text-xs uppercase tracking-wider font-semibold text-blue-400">Interactive Visual Sandbox</span>
          <h4 className="text-base font-bold text-white mt-0.5">CSS Box Model Explorer</h4>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-400 font-mono">box-sizing:</span>
          <div className="flex items-center p-0.5 bg-[#18181B] rounded-lg text-xs border border-white/[0.08]">
            <button
              onClick={() => setBoxSizing('border-box')}
              className={`px-2.5 py-1 rounded font-medium transition-colors cursor-pointer ${boxSizing === 'border-box' ? 'bg-blue-600 text-white shadow-[0_0_10px_rgba(59,130,246,0.4)]' : 'text-zinc-400 hover:text-white'}`}
            >
              border-box (Standard)
            </button>
            <button
              onClick={() => setBoxSizing('content-box')}
              className={`px-2.5 py-1 rounded font-medium transition-colors cursor-pointer ${boxSizing === 'content-box' ? 'bg-amber-600 text-white shadow-[0_0_10px_rgba(245,158,11,0.4)]' : 'text-zinc-400 hover:text-white'}`}
            >
              content-box (Legacy)
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-6 items-center">
        {/* Visual Box Model Diagram */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center p-6 bg-[#000000] rounded-xl border border-white/[0.08] overflow-x-auto min-h-[340px]">
          {/* Margin layer */}
          <div 
            className="p-3 bg-amber-500/10 border border-dashed border-amber-500/50 rounded-lg text-center transition-all duration-150"
            style={{ padding: `${Math.max(12, margin * 0.7)}px` }}
          >
            <span className="text-[11px] font-mono font-semibold text-amber-400 block mb-1">
              MARGIN: {margin}px
            </span>

            {/* Border layer */}
            <div 
              className="p-2.5 bg-purple-500/15 border-purple-500/50 rounded-md transition-all duration-150"
              style={{ borderWidth: `${border}px`, borderStyle: 'solid' }}
            >
              <span className="text-[11px] font-mono font-semibold text-purple-300 block mb-1">
                BORDER: {border}px
              </span>

              {/* Padding layer */}
              <div 
                className="bg-emerald-500/15 border border-dashed border-emerald-500/50 rounded transition-all duration-150"
                style={{ padding: `${Math.max(10, padding * 0.7)}px` }}
              >
                <span className="text-[11px] font-mono font-semibold text-emerald-400 block mb-1">
                  PADDING: {padding}px
                </span>

                {/* Content layer */}
                <div 
                  className="bg-blue-600/30 border border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.3)] rounded flex flex-col items-center justify-center text-center transition-all duration-150"
                  style={{ 
                    width: `${Math.max(120, innerContentComputedWidth * 0.8)}px`, 
                    height: `${Math.max(60, contentHeight * 0.8)}px` 
                  }}
                >
                  <span className="text-xs font-mono font-bold text-white">
                    CONTENT
                  </span>
                  <span className="text-[10px] font-mono text-cyan-300 tabular-nums">
                    {innerContentComputedWidth}px × {contentHeight}px
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sliders and Calculations */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-4 rounded-xl bg-[#111111] border border-white/[0.08] space-y-3">
            <div className="flex justify-between text-xs">
              <span className="font-semibold text-zinc-300">Declared Width</span>
              <span className="font-mono text-blue-400 tabular-nums">{contentWidth}px</span>
            </div>
            <input
              type="range"
              min={180}
              max={360}
              value={contentWidth}
              onChange={(e) => setContentWidth(Number(e.target.value))}
              className="w-full accent-blue-500 cursor-pointer"
            />

            <div className="flex justify-between text-xs">
              <span className="font-semibold text-emerald-400">Padding</span>
              <span className="font-mono text-emerald-400 tabular-nums">{padding}px</span>
            </div>
            <input
              type="range"
              min={0}
              max={48}
              value={padding}
              onChange={(e) => setPadding(Number(e.target.value))}
              className="w-full accent-emerald-500 cursor-pointer"
            />

            <div className="flex justify-between text-xs">
              <span className="font-semibold text-purple-400">Border</span>
              <span className="font-mono text-purple-400 tabular-nums">{border}px</span>
            </div>
            <input
              type="range"
              min={0}
              max={16}
              value={border}
              onChange={(e) => setBorder(Number(e.target.value))}
              className="w-full accent-purple-500 cursor-pointer"
            />

            <div className="flex justify-between text-xs">
              <span className="font-semibold text-amber-400">Margin</span>
              <span className="font-mono text-amber-400 tabular-nums">{margin}px</span>
            </div>
            <input
              type="range"
              min={0}
              max={40}
              value={margin}
              onChange={(e) => setMargin(Number(e.target.value))}
              className="w-full accent-amber-500 cursor-pointer"
            />
          </div>

          {/* Math summary */}
          <div className="p-4 rounded-xl border border-white/[0.08] bg-[#111111] text-xs space-y-2">
            <div className="flex justify-between font-mono">
              <span className="text-zinc-400">Rendered Element Width:</span>
              <span className="font-bold text-white tabular-nums">{totalRenderedWidth}px</span>
            </div>
            <div className="flex justify-between font-mono">
              <span className="text-zinc-400">Total Space Occupied (+Margin):</span>
              <span className="font-semibold text-amber-400 tabular-nums">{totalRenderedWidth + (margin * 2)}px</span>
            </div>
            <p className="text-[11px] text-zinc-400 pt-2 border-t border-white/[0.08] leading-relaxed">
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
