import { useState } from "react";

const AdvancedCounter = () => {
  const [count, setCount] = useState(0);
const [history, setHistory] = useState<number[]>([0]);

const increment = () => {
  const newCount = count + 1;

  setCount(newCount);
  setHistory((previousHistory) => [
    ...previousHistory,
    newCount,
  ]);
};

const decrement = () => {
  const newCount = count - 1;

  setCount(newCount);
  setHistory((previousHistory) => [
    ...previousHistory,
    newCount,
  ]);
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
    </main>
  );
};

export default AdvancedCounter;
