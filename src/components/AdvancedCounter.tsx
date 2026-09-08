import { useState } from 'react';

const AdvancedCounter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((previousCount) => previousCount + 1);
  };

  const decrement = () => {
    setCount((previousCount) => previousCount - 1);
  };

  return (
    <main>
      <h1>Advanced Counter</h1>

      <p>Current Count</p>
      <h2>{count}</h2>

      <button onClick={decrement}>
        Decrement
      </button>

      <button onClick={increment}>
        Increment
      </button>
    </main>
  );
};

export default AdvancedCounter;