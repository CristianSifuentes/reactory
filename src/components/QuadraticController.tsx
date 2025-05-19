import { useState } from "react";
import { QuadraticPlot } from "./QuadraticPlot";

export const QuadraticController = () => {
  const [a, setA] = useState(1);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);

  return (
    <div>
      <h3>Quadratic Function: y = ax² + bx + c</h3>
      <input type="number" value={a} onChange={(e) => setA(Number(e.target.value))} />
      <input type="number" value={b} onChange={(e) => setB(Number(e.target.value))} />
      <input type="number" value={c} onChange={(e) => setC(Number(e.target.value))} />
      <QuadraticPlot a={a} b={b} c={c} />
    </div>
  );
};