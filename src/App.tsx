import React, { useEffect, useState } from "react";
import rustWasmIllustration from "./rust-wasm.png";
import { primesLt } from "./lib";
import Number from "./components/Number";
import Toggle from "./components/Toggle";
import useWebAssembly from "./hooks/useWebAssembly";
import "./App.css";

const timedFn: (wrappedFn: (...args: any[]) => any) => number = wrappedFn => {
  const start = performance.now();

  (() => wrappedFn())();

  return performance.now() - start;
};

const App: React.FC = () => {
  const [n, setN] = useState<number>(0);
  const [useWasm, toggleWasm] = useState<boolean>(false);
  const [primes, setPrimes] = useState<number[] | Uint32Array>([]);
  const [performanceMs, setPerformance] = useState<number>(0);

  const wasm = useWebAssembly(import("prime-numbers"));

  useEffect(() => {
    let calculatePrimesFn = wasm && useWasm ? wasm.primes_lt : primesLt;

    if (n) {
      setPerformance(timedFn(() => setPrimes(calculatePrimesFn(n))));
    }
  }, [n, useWasm, wasm]);

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={rustWasmIllustration}
          className="App-logo"
          alt="The Rust & WASM crab"
        />
        <div>
          <label>
            <Toggle value={useWasm} onChange={toggleWasm} />
            Use WebAssembly?
          </label>
        </div>
        <p>
          <Number value={n} onChange={setN} />
        </p>
        <p>This calculation took {performanceMs} milliseconds.</p>
        <p>The prime numbers up to {n || 0} are</p>
        <p className="App-primes">{primes.join(", ")}</p>
      </header>
    </div>
  );
};

export default App;
