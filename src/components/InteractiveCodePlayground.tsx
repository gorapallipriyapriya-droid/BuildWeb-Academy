import React, { useState, useEffect, useRef } from 'react';
import { Play, RotateCcw, Copy, Check, Terminal, ExternalLink } from 'lucide-react';

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

  const iframeRef = useRef<HTMLIFrameElement>(null);

  const loadTemplate = (tmpl: PlaygroundTemplate) => {
    setHtmlCode(tmpl.html);
    setCssCode(tmpl.css);
    setJsCode(tmpl.js);
    setConsoleLogs([]);
  };

  const runCode = () => {
    setConsoleLogs([]);
    if (!iframeRef.current) return;

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
    <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-sm">
      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 p-1 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
            <button
              onClick={() => setActiveTab('html')}
              className={`px-3 py-1 text-xs font-mono font-medium rounded-md transition ${activeTab === 'html' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
            >
              HTML
            </button>
            <button
              onClick={() => setActiveTab('css')}
              className={`px-3 py-1 text-xs font-mono font-medium rounded-md transition ${activeTab === 'css' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
            >
              CSS
            </button>
            <button
              onClick={() => setActiveTab('js')}
              className={`px-3 py-1 text-xs font-mono font-medium rounded-md transition ${activeTab === 'js' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
            >
              JS
            </button>
          </div>

          <div className="hidden sm:flex items-center gap-1 text-xs text-slate-500">
            <span>Templates:</span>
            {templates.map((tmpl) => (
              <button
                key={tmpl.name}
                onClick={() => loadTemplate(tmpl)}
                className="px-2 py-0.5 rounded text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition"
              >
                {tmpl.name}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowConsole(!showConsole)}
            className={`flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-md border ${showConsole ? 'bg-slate-200 dark:bg-slate-800 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white' : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400'}`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Console ({consoleLogs.length})</span>
          </button>
          <button
            onClick={copyCurrentCode}
            className="p-1.5 rounded-md border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
            title="Copy code"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
          </button>
          <button
            onClick={runCode}
            className="flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-md bg-blue-600 text-white hover:bg-blue-700 shadow-xs"
          >
            <Play className="w-3.5 h-3.5" />
            <span>Run</span>
          </button>
        </div>
      </div>

      {/* Editor & Preview Split */}
      <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-200 dark:divide-slate-800 min-h-[460px]">
        {/* Code Editor Pane */}
        <div className="flex flex-col bg-slate-950 text-slate-100">
          <div className="flex items-center justify-between px-3 py-1.5 bg-slate-900 border-b border-slate-800 text-[11px] font-mono text-slate-400">
            <span>
              {activeTab === 'html' && 'index.html'}
              {activeTab === 'css' && 'styles.css'}
              {activeTab === 'js' && 'app.js'}
            </span>
            <span>Editable Editor</span>
          </div>

          <textarea
            value={activeTab === 'html' ? htmlCode : activeTab === 'css' ? cssCode : jsCode}
            onChange={(e) => {
              if (activeTab === 'html') setHtmlCode(e.target.value);
              else if (activeTab === 'css') setCssCode(e.target.value);
              else setJsCode(e.target.value);
            }}
            spellCheck={false}
            className="flex-1 w-full p-4 font-mono text-xs bg-slate-950 text-slate-100 resize-none outline-none leading-relaxed min-h-[380px]"
          />

          {showConsole && (
            <div className="h-36 border-t border-slate-800 bg-black/90 p-3 font-mono text-xs overflow-y-auto">
              <div className="text-slate-500 text-[10px] uppercase font-bold mb-1">Live Console Output</div>
              {consoleLogs.length === 0 ? (
                <span className="text-slate-600 italic">No console logs yet. Use console.log() in JavaScript.</span>
              ) : (
                consoleLogs.map((log, i) => (
                  <div key={i} className={`py-0.5 ${log.startsWith('[Error]') ? 'text-red-400' : 'text-emerald-400'}`}>
                    {log}
                  </div>
                ))
              )}
            </div>
          )}
        </div>

        {/* Live Iframe Output Pane */}
        <div className="flex flex-col bg-white dark:bg-slate-900">
          <div className="flex items-center justify-between px-3 py-1.5 bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 text-[11px] text-slate-600 dark:text-slate-300">
            <span className="font-medium">Live Browser Preview</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-mono text-[10px]">● Live rendering</span>
          </div>
          <iframe
            ref={iframeRef}
            title="Code Playground Preview"
            sandbox="allow-scripts"
            className="w-full flex-1 min-h-[380px] bg-white border-0"
          />
        </div>
      </div>
    </div>
  );
};
