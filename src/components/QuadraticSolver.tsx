import React, { useState, useEffect } from 'react';

export const QuadraticSolver = ({ a = 4, b = -9, c = 9 }) => {
  const [discriminant, setDiscriminant] = useState<number | null>(null);
  const [roots, setRoots] = useState<number[]>([]);

  const calculate = async () => {
    const d = await new Promise<number>(resolve => {
      setTimeout(() => resolve(b ** 2 - 4 * a * c), 1000);
    });

    setDiscriminant(d);

    if (d >= 0) {
      const root1 = (-b + Math.sqrt(d)) / (2 * a);
      const root2 = (-b - Math.sqrt(d)) / (2 * a);
      setRoots([root1, root2]);
    } else {
      setRoots([]);
    }
  };

  useEffect(() => {
    // NEVER make useEffect itself async
    calculate();
  }, [a, b, c]);

  return (
    <div className="math-card">
      <h3>📐 Quadratic Equation Solver</h3>
      <p>Discriminant: {discriminant !== null ? discriminant.toFixed(2) : 'Calculating...'}</p>
      <p>
        {discriminant === null
          ? 'Calculating...'
          : discriminant < 0
          ? 'No real roots'
          : `Roots: ${roots.map(r => r.toFixed(2)).join(', ')}`}
      </p>
    </div>
  );
};
