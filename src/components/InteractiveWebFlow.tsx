import React, { useState } from 'react';
import { ArrowRight, Globe, Server, Database, Monitor, ShieldCheck, CheckCircle2, RotateCcw } from 'lucide-react';

export const InteractiveWebFlow: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [protocol, setProtocol] = useState<'https' | 'http'>('https');

  const steps = [
    {
      title: '1. User Types URL & DNS Lookup',
      actor: 'Client & DNS Server',
      icon: <Globe className="w-5 h-5 text-blue-400" />,
      desc: 'You enter "webdevacademy.edu". The browser checks its local cache, then contacts the DNS Resolver to translate the domain into an IP address (e.g. 172.67.142.9).',
      status: 'DNS query resolved in 14ms'
    },
    {
      title: '2. TCP Handshake & TLS Encryption',
      actor: 'Browser & Edge Firewall',
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      desc: protocol === 'https' 
        ? 'A 3-way TCP handshake establishes connection. An encrypted TLS session is negotiated with asymmetric SSL certificates.'
        : 'Plaintext TCP connection opened without encryption. Data is susceptible to eavesdropping on public Wi-Fi.',
      status: protocol === 'https' ? 'TLS 1.3 Handshake Successful (Encrypted)' : 'Warning: Unencrypted Connection'
    },
    {
      title: '3. HTTP GET Request Sent to Web Server',
      actor: 'Web Server (Nginx / Express)',
      icon: <Server className="w-5 h-5 text-purple-400" />,
      desc: 'Browser transmits: GET /index.html HTTP/1.1 with user-agent and accepted MIME types headers.',
      status: 'Server received request on Port 443'
    },
    {
      title: '4. Backend Logic & Database Query',
      actor: 'Node.js & Database',
      icon: <Database className="w-5 h-5 text-amber-400" />,
      desc: 'The server executes routing logic, queries the PostgreSQL database for student data or reads index.html from disk.',
      status: 'Database SELECT query completed in 4ms'
    },
    {
      title: '5. HTTP Response & Critical Rendering Path',
      actor: 'Browser Engine (Blink / Gecko)',
      icon: <Monitor className="w-5 h-5 text-cyan-400" />,
      desc: 'Server responds with status 200 OK + HTML payload. Browser parses HTML to build DOM, downloads CSS for CSSOM, calculates layout, and paints pixels!',
      status: 'First Contentful Paint (FCP) in 280ms'
    }
  ];

  return (
    <div className="my-6 p-5 rounded-xl border border-white/[0.08] bg-[#0A0A0A] shadow-xl">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/[0.08]">
        <div>
          <span className="text-xs uppercase tracking-wider font-semibold text-blue-400">Interactive Simulation</span>
          <h4 className="text-base font-bold text-white mt-0.5">How a Web Request Works (Step-by-Step)</h4>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center p-1 bg-[#18181B] rounded-lg text-xs border border-white/[0.08]">
            <button
              onClick={() => setProtocol('https')}
              className={`px-2.5 py-1 rounded-md font-medium transition-colors cursor-pointer ${protocol === 'https' ? 'bg-blue-600 text-white shadow-[0_0_10px_rgba(59,130,246,0.4)]' : 'text-zinc-400 hover:text-white'}`}
            >
              HTTPS (Secure)
            </button>
            <button
              onClick={() => setProtocol('http')}
              className={`px-2.5 py-1 rounded-md font-medium transition-colors cursor-pointer ${protocol === 'http' ? 'bg-amber-600 text-white shadow-[0_0_10px_rgba(245,158,11,0.4)]' : 'text-zinc-400 hover:text-white'}`}
            >
              HTTP (Insecure)
            </button>
          </div>
          <button
            onClick={() => setActiveStep(0)}
            className="p-1.5 text-zinc-400 hover:text-white hover:bg-white/[0.06] rounded-md transition-colors cursor-pointer"
            title="Reset simulation"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Progress pipeline indicator */}
      <div className="grid grid-cols-5 gap-2 my-5">
        {steps.map((step, idx) => (
          <button
            key={idx}
            onClick={() => setActiveStep(idx)}
            className={`p-2.5 rounded-lg text-left transition-all border cursor-pointer ${
              activeStep === idx
                ? 'border-blue-500 bg-blue-500/15 shadow-[0_0_15px_rgba(59,130,246,0.25)]'
                : activeStep > idx
                ? 'border-emerald-500/40 bg-emerald-500/10'
                : 'border-white/[0.06] bg-[#111111] opacity-70 hover:opacity-100 hover:border-white/[0.12]'
            }`}
          >
            <div className="flex items-center justify-between text-xs mb-1">
              <span className={`font-semibold ${activeStep === idx ? 'text-blue-400' : 'text-zinc-300'}`}>Step {idx + 1}</span>
              {activeStep > idx ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : null}
            </div>
            <p className="text-[11px] text-zinc-400 line-clamp-1 truncate">{step.title.split('.')[1] || step.title}</p>
          </button>
        ))}
      </div>

      {/* Active step detail card */}
      <div className="p-4 rounded-xl bg-[#111111] border border-white/[0.08]">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-[#18181B] border border-white/[0.08] shadow-inner">
              {steps[activeStep].icon}
            </div>
            <div>
              <h5 className="text-sm font-bold text-white">{steps[activeStep].title}</h5>
              <span className="text-xs text-zinc-400">Actor: {steps[activeStep].actor}</span>
            </div>
          </div>
          <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#18181B] border border-white/[0.08] text-cyan-300 tabular-nums self-start">
            {steps[activeStep].status}
          </span>
        </div>
        <p className="text-sm text-zinc-300 mt-3 leading-relaxed">
          {steps[activeStep].desc}
        </p>
      </div>

      {/* Controller buttons */}
      <div className="flex justify-between items-center mt-4 pt-3 border-t border-white/[0.08]">
        <button
          onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
          disabled={activeStep === 0}
          className="px-3.5 py-1.5 text-xs font-medium rounded-lg border border-white/[0.08] bg-[#18181B] text-zinc-300 disabled:opacity-30 hover:bg-[#202024] hover:text-white transition cursor-pointer"
        >
          Previous Step
        </button>
        <span className="text-xs text-zinc-400 font-mono tabular-nums">
          Step {activeStep + 1} of {steps.length}
        </span>
        <button
          onClick={() => setActiveStep(prev => Math.min(steps.length - 1, prev + 1))}
          disabled={activeStep === steps.length - 1}
          className="flex items-center gap-1 px-4 py-1.5 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-500 text-white disabled:opacity-30 shadow-[0_0_15px_rgba(59,130,246,0.35)] transition cursor-pointer"
        >
          <span>Next Step</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
