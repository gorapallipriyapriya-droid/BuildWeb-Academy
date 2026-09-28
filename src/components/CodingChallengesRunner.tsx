import React, { useState } from 'react';
import { codingChallenges } from '../data/interviewData';
import { Play, CheckCircle2, XCircle, RotateCcw, Lightbulb } from 'lucide-react';
import confetti from 'canvas-confetti';

export const CodingChallengesRunner: React.FC = () => {
  const [selectedChallengeId, setSelectedChallengeId] = useState(codingChallenges[0].id);
  const activeChallenge = codingChallenges.find(c => c.id === selectedChallengeId) || codingChallenges[0];

  const [userCode, setUserCode] = useState(activeChallenge.starterCode);
  const [testResults, setTestResults] = useState<{ passed: boolean; message: string }[] | null>(null);
  const [showSolution, setShowSolution] = useState(false);

  const handleSelectChallenge = (id: string) => {
    setSelectedChallengeId(id);
    const chal = codingChallenges.find(c => c.id === id);
    if (chal) {
      setUserCode(chal.starterCode);
      setTestResults(null);
      setShowSolution(false);
    }
  };

  const runTests = () => {
    try {
      // Evaluate function in safe scope
      const evalFn = new Function(`
        ${userCode}
        return {
          reverseString: typeof reverseString !== 'undefined' ? reverseString : null,
          fizzBuzz: typeof fizzBuzz !== 'undefined' ? fizzBuzz : null,
          twoSum: typeof twoSum !== 'undefined' ? twoSum : null,
          isPalindrome: typeof isPalindrome !== 'undefined' ? isPalindrome : null
        };
      `);

      const fns = evalFn();
      const results: { passed: boolean; message: string }[] = [];

      if (activeChallenge.id === 'reverse-string') {
        const fn = fns.reverseString;
        if (!fn) throw new Error('reverseString function is not defined.');
        const t1 = fn('hello');
        results.push({ passed: t1 === 'olleh', message: `reverseString("hello") -> got "${t1}", expected "olleh"` });
        const t2 = fn('WebCraft');
        results.push({ passed: t2 === 'tfarCbeW', message: `reverseString("WebCraft") -> got "${t2}", expected "tfarCbeW"` });
      } else if (activeChallenge.id === 'fizz-buzz') {
        const fn = fns.fizzBuzz;
        if (!fn) throw new Error('fizzBuzz function is not defined.');
        const t1 = fn(5);
        const expected1 = [1, 2, 'Fizz', 4, 'Buzz'];
        results.push({ passed: JSON.stringify(t1) === JSON.stringify(expected1), message: `fizzBuzz(5) -> ${JSON.stringify(t1)}` });
      } else if (activeChallenge.id === 'two-sum') {
        const fn = fns.twoSum;
        if (!fn) throw new Error('twoSum function is not defined.');
        const t1 = fn([2, 7, 11, 15], 9);
        results.push({ passed: JSON.stringify(t1) === '[0,1]', message: `twoSum([2, 7, 11, 15], 9) -> ${JSON.stringify(t1)}` });
      } else if (activeChallenge.id === 'is-palindrome') {
        const fn = fns.isPalindrome;
        if (!fn) throw new Error('isPalindrome function is not defined.');
        results.push({ passed: fn('racecar') === true, message: `isPalindrome("racecar") -> true` });
        results.push({ passed: fn('hello') === false, message: `isPalindrome("hello") -> false` });
      }

      setTestResults(results);

      const allPassed = results.every(r => r.passed);
      if (allPassed) {
        try {
          confetti({ particleCount: 50, spread: 60 });
        } catch {
          // ignore
        }
      }
    } catch (err: any) {
      setTestResults([{ passed: false, message: `Runtime Execution Error: ${err.message}` }]);
    }
  };

  return (
    <div className="rounded-2xl border border-white/[0.08] bg-[#111111] shadow-xl overflow-hidden my-6">
      {/* Selector Tabs */}
      <div className="flex border-b border-white/[0.08] overflow-x-auto bg-[#0A0A0A] p-2.5 gap-2">
        {codingChallenges.map((c) => (
          <button
            key={c.id}
            onClick={() => handleSelectChallenge(c.id)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition cursor-pointer ${
              selectedChallengeId === c.id
                ? 'bg-[#18181B] text-cyan-400 font-bold border border-cyan-500/40 shadow-[0_0_12px_rgba(6,182,212,0.25)]'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            {c.title}
          </button>
        ))}
      </div>

      <div className="p-6">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div>
            <span className="text-xs text-blue-400 font-semibold">{activeChallenge.category}</span>
            <h4 className="text-xl font-bold text-white">{activeChallenge.title}</h4>
          </div>
          <div className="flex items-center gap-2">
            <span className={`text-xs px-2.5 py-0.5 rounded-full font-mono font-medium ${
              activeChallenge.difficulty === 'Easy' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
            }`}>
              {activeChallenge.difficulty}
            </span>
            <button
              onClick={() => setShowSolution(!showSolution)}
              className="flex items-center gap-1.5 text-xs text-zinc-300 hover:text-white px-3 py-1.5 rounded-lg border border-white/[0.08] bg-[#18181B] hover:bg-[#202024] cursor-pointer"
            >
              <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
              <span>{showSolution ? 'Hide Solution' : 'View Solution'}</span>
            </button>
          </div>
        </div>

        <p className="text-sm text-zinc-300 mb-5 leading-relaxed">
          {activeChallenge.description}
        </p>

        {showSolution && (
          <div className="mb-5 p-4 rounded-xl bg-[#18181B] border border-blue-500/30 text-xs font-mono text-cyan-200 overflow-x-auto">
            <div className="font-sans font-semibold text-[11px] text-cyan-400 mb-1.5">Recommended Solution:</div>
            <pre className="whitespace-pre">{activeChallenge.solution}</pre>
          </div>
        )}

        {/* Code Editor */}
        <div className="rounded-xl overflow-hidden border border-white/[0.08] bg-[#0A0A0A] text-zinc-100 mb-4 shadow-inner">
          <div className="flex justify-between items-center px-4 py-2 bg-[#000000] border-b border-white/[0.08] text-[11px] font-mono text-zinc-400">
            <span>JavaScript Live Solution</span>
            <button
              onClick={() => {
                setUserCode(activeChallenge.starterCode);
                setTestResults(null);
              }}
              className="flex items-center gap-1 hover:text-white cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset</span>
            </button>
          </div>
          <textarea
            value={userCode}
            onChange={(e) => setUserCode(e.target.value)}
            spellCheck={false}
            rows={8}
            className="w-full p-4 font-mono text-xs bg-[#0A0A0A] text-zinc-100 outline-none leading-relaxed resize-y"
          />
        </div>

        {/* Run Tests Button */}
        <div className="flex items-center justify-between">
          <button
            onClick={runTests}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl btn-neon-primary text-xs font-bold cursor-pointer"
          >
            <Play className="w-3.5 h-3.5" />
            <span>Run Test Cases</span>
          </button>
        </div>

        {/* Test Case Results */}
        {testResults && (
          <div className="mt-5 p-4 rounded-xl border border-white/[0.08] bg-[#0A0A0A] text-xs space-y-2">
            <div className="font-semibold text-white flex items-center gap-1.5">
              <span>Test Results:</span>
              <span className={`tabular-nums font-mono ${testResults.every(r => r.passed) ? 'text-emerald-400' : 'text-amber-400'}`}>
                {testResults.filter(r => r.passed).length}/{testResults.length} Passing
              </span>
            </div>
            {testResults.map((res, i) => (
              <div key={i} className="flex items-start gap-2 text-xs">
                {res.passed ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                ) : (
                  <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                )}
                <span className={`font-mono ${res.passed ? 'text-zinc-300' : 'text-rose-400'}`}>
                  {res.message}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
