import { useEffect, useState } from "react";

const AdvancedCounter = () => {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState<number[]>([0]);
  const [saveMessage, setSaveMessage] = useState("");

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
    const newCount = count + 1;

    setCount(newCount);
    setHistory((previousHistory) => [...previousHistory, newCount]);
  };

  const decrement = () => {
    const newCount = count - 1;

    setCount(newCount);
    setHistory((previousHistory) => [...previousHistory, newCount]);
  };

  return (
    <main>
      <h1>Advanced Counter</h1>

      <p>Current Count</p>
      <h2>{count}</h2>

      <button onClick={decrement}>Decrement</button>

      <button onClick={increment}>Increment</button>

      <section>
        <h3>Count History</h3>
        <p>{history.join(", ")}</p>
      </section>

      <p>{saveMessage}</p>
    </main>
  );
};

export default AdvancedCounter;
