import React, { useState, useMemo, useCallback } from 'react';

const fibonacci = (n: number): number => {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

const ExpensiveCalculation = ({ number }: { number: number }) => {
  const result = useMemo(() => fibonacci(number), [number]);
  console.log('🔄 ExpensiveCalculation rendered');
  return <p>Fibonacci({number}) = {result}</p>;
};

const Counter = ({ onIncrement }: { onIncrement: () => void }) => {
  console.log('🔁 Counter rendered');
  return <button onClick={onIncrement}>+1</button>;
};

export const OptimizedComponent = () => {
  const [count, setCount] = useState(0);
  const [fibNumber, setFibNumber] = useState(20);

  const increment = useCallback(() => setCount((prev) => prev + 1), []);

  return (
    <div>
      <h2>useMemo & useCallback Demo</h2>
      <Counter onIncrement={increment} />
      <p>Clicked: {count}</p>

      <input
        type="number"
        value={fibNumber}
        onChange={(e) => setFibNumber(Number(e.target.value))}
      />

      <ExpensiveCalculation number={fibNumber} />
    </div>
  );
};
