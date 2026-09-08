import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ChevronDown,
  ChevronUp,
  Gamepad2,
  History,
  Keyboard,
  RotateCcw,
} from "lucide-react";

const AdvancedCounter = () => {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState<number[]>([0]);
  const [saveMessage, setSaveMessage] = useState("");
  const [step, setStep] = useState(1);

  useEffect(() => {
    setSaveMessage("Saving...");

    const saveTimer = setTimeout(() => {
      localStorage.setItem("counter", count.toString());
      setSaveMessage("Changes saved.");
    }, 500);

    return () => {
      clearTimeout(saveTimer);
    };
  }, [count]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowUp") {
        increment();
      }

      if (event.key === "ArrowDown") {
        decrement();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  const increment = () => {
    const newCount = count + step;

    setCount(newCount);
    setHistory((previousHistory) => [...previousHistory, newCount]);
  };

  const decrement = () => {
    const newCount = count - step;

    setCount(newCount);
    setHistory((previousHistory) => [...previousHistory, newCount]);
  };

  const reset = () => {
    setCount(0);
    setHistory([]);
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-4 py-10 text-white">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500/5 blur-3xl" />

      <motion.section
        initial={{
          opacity: 0,
          scale: 0.96,
          y: 20,
          boxShadow: "0 0 20px rgba(217,70,239,0.15)",
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
          boxShadow: [
            "0 0 30px rgba(217,70,239,0.20)",
            "0 0 50px rgba(217,70,239,0.35)",
            "0 0 30px rgba(217,70,239,0.20)",
          ],
        }}
        transition={{
          opacity: { duration: 0.5 },
          scale: { duration: 0.5 },
          y: { duration: 0.5 },
          boxShadow: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="relative w-full max-w-2xl rounded-2xl border-2 border-fuchsia-500 bg-slate-900 p-6 md:p-10"
      >
        {/* Header */}
        <header className="mb-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-4 flex items-center justify-center gap-3 text-cyan-400"
          >
            <Gamepad2 size={18} />

            <p className="font-arcade text-[9px] uppercase tracking-[0.3em]">
              Player One
            </p>

            <Gamepad2 size={18} />
          </motion.div>

          <motion.h1
            animate={{
              textShadow: [
                "0 0 6px rgba(232,121,249,0.6)",
                "0 0 14px rgba(232,121,249,0.95)",
                "0 0 6px rgba(232,121,249,0.6)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="font-arcade text-2xl uppercase leading-relaxed tracking-wider text-fuchsia-400 md:text-4xl"
          >
            Advanced Counter
          </motion.h1>

          <p className="mt-4 text-xs font-bold uppercase tracking-[0.25em] text-slate-500">
            React Arcade System
          </p>
        </header>

        {/* Score Display */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="crt-screen relative mb-8 overflow-hidden rounded-xl border-2 border-cyan-400 bg-slate-950 p-6 text-center shadow-[inset_0_0_25px_rgba(34,211,238,0.08),0_0_20px_rgba(34,211,238,0.15)]"
        >
          <p className="font-arcade relative z-10 mb-5 text-[9px] uppercase tracking-[0.25em] text-cyan-300">
            Current Score
          </p>

          <div className="relative z-10 flex min-h-[90px] items-center justify-center">
            <AnimatePresence mode="popLayout">
              <motion.p
                key={count}
                initial={{ opacity: 0, scale: 1.35, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.75 }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 25,
                }}
                className="font-arcade text-5xl tabular-nums text-cyan-400 md:text-7xl"
              >
                {count}
              </motion.p>
            </AnimatePresence>
          </div>
        </motion.section>

        {/* Step Control */}
        <div className="mb-6">
          <label
            htmlFor="step"
            className="font-arcade mb-3 block text-center text-[9px] uppercase tracking-[0.2em] text-fuchsia-300"
          >
            Step Value
          </label>

          <input
            id="step"
            type="number"
            value={step}
            onChange={(event) => setStep(Number(event.target.value))}
            className="font-arcade w-full rounded-lg border-2 border-fuchsia-500 bg-slate-950 px-4 py-4 text-center text-lg text-white outline-none transition focus:border-cyan-400 focus:shadow-[0_0_18px_rgba(34,211,238,0.35)]"
          />
        </div>

        {/* Arcade Controls */}
        <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <motion.button
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.94, y: 2 }}
            onClick={decrement}
            className="font-arcade flex items-center justify-center gap-2 rounded-lg border-2 border-fuchsia-500 bg-fuchsia-950 px-3 py-5 text-[9px] uppercase leading-relaxed text-fuchsia-300 shadow-[0_5px_0_rgba(112,26,117,0.7)] transition-colors hover:bg-fuchsia-900 hover:shadow-[0_5px_20px_rgba(217,70,239,0.4)]"
          >
            <ChevronDown size={17} />
            Decrease
          </motion.button>

          <motion.button
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.94, y: 2 }}
            onClick={reset}
            className="font-arcade flex items-center justify-center gap-2 rounded-lg border-2 border-yellow-400 bg-yellow-950 px-3 py-5 text-[9px] uppercase leading-relaxed text-yellow-300 shadow-[0_5px_0_rgba(113,63,18,0.7)] transition-colors hover:bg-yellow-900 hover:shadow-[0_5px_20px_rgba(250,204,21,0.35)]"
          >
            <RotateCcw size={15} />
            Reset
          </motion.button>

          <motion.button
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.94, y: 2 }}
            onClick={increment}
            className="font-arcade flex items-center justify-center gap-2 rounded-lg border-2 border-cyan-400 bg-cyan-950 px-3 py-5 text-[9px] uppercase leading-relaxed text-cyan-300 shadow-[0_5px_0_rgba(21,94,117,0.7)] transition-colors hover:bg-cyan-900 hover:shadow-[0_5px_20px_rgba(34,211,238,0.4)]"
          >
            <ChevronUp size={17} />
            Increase
          </motion.button>
        </div>

        {/* History */}
        <section className="mb-6 rounded-lg border border-slate-700 bg-slate-950 p-5">
          <div className="mb-4 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <History size={16} className="text-cyan-400" />

              <h2 className="font-arcade text-[9px] uppercase leading-relaxed tracking-[0.15em] text-cyan-400">
                Score History
              </h2>
            </div>

            <span className="font-arcade text-[8px] uppercase text-slate-600">
              Log
            </span>
          </div>

          <motion.p
            key={history.join("-")}
            initial={{ opacity: 0.4 }}
            animate={{ opacity: 1 }}
            className="break-words font-mono text-sm leading-7 text-slate-300"
          >
            {history.length > 0 ? history.join(" → ") : "No scores recorded"}
          </motion.p>
        </section>

        {/* System Status */}
        <div className="border-t border-slate-800 pt-5 text-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={saveMessage}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              className={`font-arcade mb-5 text-[8px] uppercase leading-relaxed tracking-[0.1em] ${
                saveMessage === "Changes saved."
                  ? "text-emerald-400"
                  : "text-yellow-300"
              }`}
            >
              ● {saveMessage || "System Ready"}
            </motion.p>
          </AnimatePresence>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-bold uppercase tracking-wider text-slate-500">
            <span className="flex items-center gap-2">
              <Keyboard size={15} />
              Controls
            </span>

            <span>
              <strong className="text-cyan-400">↑</strong> Increase
            </span>

            <span>
              <strong className="text-fuchsia-400">↓</strong> Decrease
            </span>
          </div>
        </div>
      </motion.section>
    </main>
  );
};

export default AdvancedCounter;
