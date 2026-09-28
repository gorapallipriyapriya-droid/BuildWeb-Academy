import React, { useState, useEffect, useRef } from 'react';
import { Play, RotateCcw, Copy, Check, Terminal, ExternalLink, Smartphone, Tablet, Monitor, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface PlaygroundTemplate {
  name: string;
  html: string;
  css: string;
  js: string;
}

const templates: PlaygroundTemplate[] = [
  {
    name: 'Interactive Counter',
    html: `<div class="container">
  <div class="card">
    <span class="badge">JavaScript DOM</span>
    <h2>Interactive Counter</h2>
    <div id="counter" class="number">0</div>
    <div class="btn-group">
      <button id="decrement">- Decrement</button>
      <button id="reset">Reset</button>
      <button id="increment" class="primary">+ Increment</button>
    </div>
  </div>
</div>`,
    css: `body {
  margin: 0;
  font-family: system-ui, sans-serif;
  background: #f1f5f9;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.card {
  background: white;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
  text-align: center;
  max-width: 320px;
}
.badge {
  font-size: 11px;
  text-transform: uppercase;
  color: #2563eb;
  font-weight: 700;
  letter-spacing: 0.05em;
}
h2 { margin: 0.5rem 0 1rem; color: #0f172a; }
.number {
  font-size: 3.5rem;
  font-weight: 800;
  color: #0f172a;
  margin: 1rem 0;
  transition: transform 0.15s ease;
}
.btn-group { display: flex; gap: 8px; justify-content: center; }
button {
  padding: 8px 14px;
  border-radius: 6px;
  border: 1px solid #cbd5e1;
  background: white;
  cursor: pointer;
  font-weight: 500;
}
button.primary {
  background: #2563eb;
  color: white;
  border-color: #2563eb;
}`,
    js: `const counterEl = document.querySelector('#counter');
const incBtn = document.querySelector('#increment');
const decBtn = document.querySelector('#decrement');
const resetBtn = document.querySelector('#reset');

let count = 0;

function updateDisplay() {
  counterEl.textContent = count;
  counterEl.style.transform = 'scale(1.15)';
  setTimeout(() => counterEl.style.transform = 'scale(1)', 150);
  console.log('Counter updated:', count);
}

incBtn.addEventListener('click', () => { count++; updateDisplay(); });
decBtn.addEventListener('click', () => { count--; updateDisplay(); });
resetBtn.addEventListener('click', () => { count = 0; updateDisplay(); });

console.log('Counter playground ready!');`
  },
  {
    name: 'Responsive Flex Card',
    html: `<div class="card-grid">
  <div class="card">
    <div class="tag">Design System</div>
    <h3>Modern CSS Tokens</h3>
    <p>Learn how design tokens and CSS variables power multi-brand component libraries.</p>
    <a href="#" class="link">Read Guide &rarr;</a>
  </div>
  <div class="card popular">
    <div class="tag">Architecture</div>
    <h3>Next.js App Router</h3>
    <p>Master server components, parallel routes, and streaming responses with React 19.</p>
    <a href="#" class="link">Read Guide &rarr;</a>
  </div>
</div>`,
    css: `body {
  margin: 0;
  padding: 2rem;
  font-family: system-ui, sans-serif;
  background: #0f172a;
  color: #f8fafc;
}
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
  max-width: 640px;
  margin: 0 auto;
}
.card {
  background: #1e293b;
  border: 1px solid #334155;
  border-radius: 10px;
  padding: 1.5rem;
  transition: transform 0.2s, border-color 0.2s;
}
.card:hover {
  transform: translateY(-4px);
  border-color: #3b82f6;
}
.popular {
  border-color: #60a5fa;
  background: #172554;
}
.tag {
  font-size: 11px;
  color: #60a5fa;
  font-weight: 600;
}
h3 { margin: 0.5rem 0; font-size: 1.25rem; }
p { font-size: 0.9rem; color: #94a3b8; line-height: 1.5; }
.link {
  display: inline-block;
  margin-top: 1rem;
  color: #38bdf8;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
}`,
    js: `console.log('Flex grid loaded with auto-fit responsiveness.');`
  },
  {
    name: 'Form with Validation',
    html: `<div class="form-wrapper">
  <h2>Student Enrollment</h2>
  <form id="enroll-form">
    <div class="field">
      <label for="name">Full Name</label>
      <input type="text" id="name" placeholder="Ada Lovelace" required />
    </div>
    <div class="field">
      <label for="email">Student Email</label>
      <input type="email" id="email" placeholder="ada@academy.edu" required />
    </div>
    <button type="submit" id="submit-btn">Enroll in Course</button>
  </form>
  <div id="status-msg" class="hidden"></div>
</div>`,
    css: `body {
  font-family: system-ui, sans-serif;
  background: #f8fafc;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
}
.form-wrapper {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
  width: 100%;
  max-width: 360px;
}
h2 { margin-top: 0; color: #0f172a; font-size: 1.4rem; }
.field { margin-bottom: 1rem; }
label { display: block; font-size: 0.85rem; font-weight: 600; margin-bottom: 4px; color: #334155; }
input {
  width: 100%;
  box-sizing: border-box;
  padding: 8px 12px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  font-size: 0.95rem;
}
input:focus { outline: 2px solid #2563eb; border-color: transparent; }
button {
  width: 100%;
  padding: 10px;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
}
button:hover { background: #1d4ed8; }
#status-msg {
  margin-top: 1rem;
  padding: 10px;
  border-radius: 6px;
  font-size: 0.85rem;
}
.success { background: #dcfce7; color: #15803d; }
.hidden { display: none; }`,
    js: `const form = document.querySelector('#enroll-form');
const statusMsg = document.querySelector('#status-msg');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  
  statusMsg.className = 'success';
  statusMsg.textContent = 'Enrolled successfully: ' + name + ' (' + email + ')';
  console.log('Submission received:', { name, email, time: new Date().toLocaleTimeString() });
});`
  }
];

export const InteractiveCodePlayground: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'html' | 'css' | 'js'>('html');
  const [htmlCode, setHtmlCode] = useState(templates[0].html);
  const [cssCode, setCssCode] = useState(templates[0].css);
  const [jsCode, setJsCode] = useState(templates[0].js);
  const [consoleLogs, setConsoleLogs] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);
  const [showConsole, setShowConsole] = useState(false);
  const [viewportMode, setViewportMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [isRunning, setIsRunning] = useState(false);

  const iframeRef = useRef<HTMLIFrameElement>(null);

  const loadTemplate = (tmpl: PlaygroundTemplate) => {
    setHtmlCode(tmpl.html);
    setCssCode(tmpl.css);
    setJsCode(tmpl.js);
    setConsoleLogs([]);
  };

  const runCode = () => {
    setIsRunning(true);
    setConsoleLogs([]);
    if (!iframeRef.current) {
      setIsRunning(false);
      return;
    }

    const source = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <style>${cssCode}</style>
        </head>
        <body>
          ${htmlCode}
          <script>
            (function() {
              const originalLog = console.log;
              const originalError = console.error;
              console.log = function(...args) {
                window.parent.postMessage({ type: 'CONSOLE_LOG', payload: args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' ') }, '*');
                originalLog.apply(console, args);
              };
              console.error = function(...args) {
                window.parent.postMessage({ type: 'CONSOLE_ERROR', payload: args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' ') }, '*');
                originalError.apply(console, args);
              };
              try {
                ${jsCode}
              } catch (err) {
                console.error(err.message);
              }
            })();
          </script>
        </body>
      </html>
    `;
    iframeRef.current.srcdoc = source;
    setTimeout(() => setIsRunning(false), 250);
  };

  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (e.data?.type === 'CONSOLE_LOG') {
        setConsoleLogs(prev => [...prev.slice(-20), `> ${e.data.payload}`]);
      } else if (e.data?.type === 'CONSOLE_ERROR') {
        setConsoleLogs(prev => [...prev.slice(-20), `[Error] ${e.data.payload}`]);
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  useEffect(() => {
    runCode();
  }, [htmlCode, cssCode, jsCode]);

  const copyCurrentCode = () => {
    const full = `<!-- HTML -->\n${htmlCode}\n\n/* CSS */\n${cssCode}\n\n// JavaScript\n${jsCode}`;
    navigator.clipboard.writeText(full);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#111111] rounded-3xl border border-white/[0.08] overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.8)]">
      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 sm:p-5 border-b border-white/[0.08] bg-[#0A0A0A]">
        <div className="flex flex-wrap items-center gap-3">
          {/* File Tab Selectors */}
          <div className="flex items-center gap-1.5 p-1 bg-[#18181B] rounded-xl border border-white/[0.08]">
            <button
              onClick={() => setActiveTab('html')}
              className={`px-3.5 py-1.5 text-xs font-mono font-bold rounded-lg transition-all cursor-pointer ${
                activeTab === 'html'
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-[0_0_12px_rgba(59,130,246,0.5)]'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              index.html
            </button>
            <button
              onClick={() => setActiveTab('css')}
              className={`px-3.5 py-1.5 text-xs font-mono font-bold rounded-lg transition-all cursor-pointer ${
                activeTab === 'css'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-[0_0_12px_rgba(139,92,246,0.5)]'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              styles.css
            </button>
            <button
              onClick={() => setActiveTab('js')}
              className={`px-3.5 py-1.5 text-xs font-mono font-bold rounded-lg transition-all cursor-pointer ${
                activeTab === 'js'
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-[0_0_12px_rgba(6,182,212,0.5)]'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              app.js
            </button>
          </div>

          {/* Preset Starter Templates */}
          <div className="hidden md:flex items-center gap-1.5 text-xs text-zinc-400">
            <span className="font-semibold text-[11px] text-zinc-500">Presets:</span>
            {templates.map((tmpl) => (
              <button
                key={tmpl.name}
                onClick={() => loadTemplate(tmpl)}
                className="px-2.5 py-1 rounded-lg text-[11px] font-medium text-zinc-300 bg-[#18181B] hover:bg-[#202024] hover:text-white border border-white/[0.08] transition cursor-pointer"
              >
                {tmpl.name}
              </button>
            ))}
          </div>
        </div>

        {/* Viewport size controls & Actions */}
        <div className="flex items-center gap-2.5">
          {/* Responsive viewport switcher */}
          <div className="hidden sm:flex items-center p-1 bg-[#18181B] rounded-xl border border-white/[0.08]">
            <button
              onClick={() => setViewportMode('desktop')}
              className={`p-1.5 rounded-lg transition cursor-pointer ${viewportMode === 'desktop' ? 'bg-blue-600 text-white shadow-[0_0_10px_rgba(59,130,246,0.4)]' : 'text-zinc-400 hover:text-white'}`}
              title="Desktop View"
            >
              <Monitor className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setViewportMode('tablet')}
              className={`p-1.5 rounded-lg transition cursor-pointer ${viewportMode === 'tablet' ? 'bg-blue-600 text-white shadow-[0_0_10px_rgba(59,130,246,0.4)]' : 'text-zinc-400 hover:text-white'}`}
              title="Tablet View"
            >
              <Tablet className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setViewportMode('mobile')}
              className={`p-1.5 rounded-lg transition cursor-pointer ${viewportMode === 'mobile' ? 'bg-blue-600 text-white shadow-[0_0_10px_rgba(59,130,246,0.4)]' : 'text-zinc-400 hover:text-white'}`}
              title="Mobile View"
            >
              <Smartphone className="w-3.5 h-3.5" />
            </button>
          </div>

          <button
            onClick={() => setShowConsole(!showConsole)}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-xl border transition cursor-pointer ${
              showConsole
                ? 'bg-[#202024] border-white/20 text-white'
                : 'border-white/[0.08] bg-[#18181B] text-zinc-400 hover:text-white hover:bg-[#202024]'
            }`}
          >
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>Console ({consoleLogs.length})</span>
          </button>

          <button
            onClick={copyCurrentCode}
            className="p-2 rounded-xl border border-white/[0.08] bg-[#18181B] text-zinc-400 hover:text-white hover:bg-[#202024] transition cursor-pointer"
            title="Copy code"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
          </button>

          <button
            onClick={runCode}
            disabled={isRunning}
            className="flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-xl btn-neon-primary cursor-pointer"
          >
            <Play className={`w-3.5 h-3.5 ${isRunning ? 'animate-spin' : ''}`} />
            <span>Run Code</span>
          </button>
        </div>
      </div>

      {/* Editor & Preview Split View */}
      <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-white/[0.08] min-h-[500px]">
        {/* Code Editor Pane */}
        <div className="flex flex-col bg-[#0A0A0A] text-zinc-100">
          <div className="flex items-center justify-between px-4 py-2 bg-[#000000] border-b border-white/[0.08] text-[11px] font-mono text-zinc-400">
            <span className="text-blue-400 font-bold">
              {activeTab === 'html' && 'HTML5 Editor'}
              {activeTab === 'css' && 'CSS3 Stylesheet'}
              {activeTab === 'js' && 'JavaScript (ES6+) Engine'}
            </span>
            <span className="text-zinc-500">Live Auto-compiling</span>
          </div>

          <textarea
            value={activeTab === 'html' ? htmlCode : activeTab === 'css' ? cssCode : jsCode}
            onChange={(e) => {
              if (activeTab === 'html') setHtmlCode(e.target.value);
              else if (activeTab === 'css') setCssCode(e.target.value);
              else setJsCode(e.target.value);
            }}
            spellCheck={false}
            className="flex-1 w-full p-5 font-mono text-xs bg-[#0A0A0A] text-zinc-100 resize-none outline-none leading-relaxed min-h-[420px]"
          />

          {showConsole && (
            <motion.div 
              initial={{ height: 0 }}
              animate={{ height: 140 }}
              className="border-t border-white/[0.08] bg-[#000000] p-3.5 font-mono text-xs overflow-y-auto"
            >
              <div className="text-zinc-500 text-[10px] uppercase font-bold mb-1.5 flex items-center justify-between">
                <span>Interactive Console Output</span>
                <button onClick={() => setConsoleLogs([])} className="text-zinc-400 hover:text-white cursor-pointer">Clear</button>
              </div>
              {consoleLogs.length === 0 ? (
                <span className="text-zinc-600 italic">No output yet. Call console.log() in your code to view results.</span>
              ) : (
                consoleLogs.map((log, i) => (
                  <div key={i} className={`py-0.5 ${log.startsWith('[Error]') ? 'text-rose-400' : 'text-emerald-400'}`}>
                    {log}
                  </div>
                ))
              )}
            </motion.div>
          )}
        </div>

        {/* Live Iframe Output Pane */}
        <div className="flex flex-col bg-[#050505] overflow-hidden items-center justify-start">
          <div className="w-full flex items-center justify-between px-4 py-2 bg-[#000000] border-b border-white/[0.08] text-[11px] text-zinc-300">
            <span className="font-semibold flex items-center gap-1.5">
              <span>Preview Window</span>
              <span className="text-zinc-500">({viewportMode})</span>
            </span>
            <span className="text-emerald-400 font-mono text-[10px] flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>GPU Accelerated</span>
            </span>
          </div>

          <div className="w-full flex-1 p-3 flex justify-center items-stretch overflow-auto">
            <div
              className={`transition-all duration-300 bg-white rounded-xl shadow-md overflow-hidden border border-white/[0.1] flex flex-col ${
                viewportMode === 'mobile'
                  ? 'w-[375px]'
                  : viewportMode === 'tablet'
                  ? 'w-[768px]'
                  : 'w-full'
              }`}
            >
              <iframe
                ref={iframeRef}
                title="Code Playground Preview"
                sandbox="allow-scripts"
                className="w-full flex-1 min-h-[420px] bg-white border-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
