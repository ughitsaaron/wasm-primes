import { useEffect, useState } from "react";

export default function useWebAssembly<T = any>(module: Promise<T>) {
  const [wasm, setWasm] = useState<T | null>(null);

  useEffect(() => {
    const loadModule = async () => {
      setWasm(await module);
    };

    loadModule();
  });

  return wasm;
}
