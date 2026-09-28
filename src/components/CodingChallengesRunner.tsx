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
    <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm overflow-hidden my-6">
      {/* Selector Tabs */}
      <div className="flex border-b border-slate-200 dark:border-slate-800 overflow-x-auto bg-slate-50 dark:bg-slate-950 p-2 gap-2">
        {codingChallenges.map((c) => (
          <button
            key={c.id}
            onClick={() => handleSelectChallenge(c.id)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition ${
              selectedChallengeId === c.id
                ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-xs border border-slate-200 dark:border-slate-700'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            {c.title}
          </button>
        ))}
      </div>

      <div className="p-5">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div>
            <span className="text-xs text-blue-600 dark:text-blue-400 font-semibold">{activeChallenge.category}</span>
            <h4 className="text-lg font-bold text-slate-900 dark:text-white">{activeChallenge.title}</h4>
          </div>
          <div className="flex items-center gap-2">
            <span className={`text-xs px-2 py-0.5 rounded font-medium ${
              activeChallenge.difficulty === 'Easy' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300' : 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
            }`}>
              {activeChallenge.difficulty}
            </span>
            <button
              onClick={() => setShowSolution(!showSolution)}
              className="flex items-center gap-1 text-xs text-slate-600 dark:text-slate-400 hover:text-blue-600 px-2 py-1 rounded border border-slate-200 dark:border-slate-700"
            >
              <Lightbulb className="w-3.5 h-3.5" />
              <span>{showSolution ? 'Hide Solution' : 'View Solution'}</span>
            </button>
          </div>
        </div>

        <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
          {activeChallenge.description}
        </p>

        {showSolution && (
          <div className="mb-4 p-3 rounded-lg bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900 text-xs font-mono text-blue-900 dark:text-blue-200 overflow-x-auto">
            <div className="font-sans font-semibold text-[11px] text-blue-700 dark:text-blue-300 mb-1">Recommended Solution:</div>
            <pre className="whitespace-pre">{activeChallenge.solution}</pre>
          </div>
        )}

        {/* Code Editor */}
        <div className="rounded-lg overflow-hidden border border-slate-800 bg-slate-950 text-slate-100 mb-4">
          <div className="flex justify-between items-center px-3 py-1.5 bg-slate-900 border-b border-slate-800 text-[11px] font-mono text-slate-400">
            <span>JavaScript Live Solution</span>
            <button
              onClick={() => {
                setUserCode(activeChallenge.starterCode);
                setTestResults(null);
              }}
              className="flex items-center gap-1 hover:text-white"
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
            className="w-full p-3 font-mono text-xs bg-slate-950 text-slate-100 outline-none leading-relaxed resize-y"
          />
        </div>

        {/* Run Tests Button */}
        <div className="flex items-center justify-between">
          <button
            onClick={runTests}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs shadow-xs"
          >
            <Play className="w-3.5 h-3.5" />
            <span>Run Test Cases</span>
          </button>
        </div>

        {/* Test Case Results */}
        {testResults && (
          <div className="mt-4 p-3.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs space-y-2">
            <div className="font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
              <span>Test Results:</span>
              <span className={`tabular-nums font-mono ${testResults.every(r => r.passed) ? 'text-emerald-600' : 'text-amber-600'}`}>
                {testResults.filter(r => r.passed).length}/{testResults.length} Passing
              </span>
            </div>
            {testResults.map((res, i) => (
              <div key={i} className="flex items-start gap-2 text-xs">
                {res.passed ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                ) : (
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                )}
                <span className={`font-mono ${res.passed ? 'text-slate-700 dark:text-slate-300' : 'text-rose-600 dark:text-rose-400'}`}>
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
