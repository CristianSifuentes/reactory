import { useLayoutEffect, useRef } from "react";
import { useMath } from "./MathContext";

export const EquationVisualizer = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { state } = useMath();
  const [a, b, c] = state.activeEquation.coefficients;

  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();

    for (let x = -100; x <= 100; x++) {
      const px = canvas.width / 2 + x;
      const y = a * x * x + b * x + c;
      const py = canvas.height / 2 - y;
      x === -100 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
    }

    ctx.strokeStyle = "teal";
    ctx.lineWidth = 2;
    ctx.stroke();
  }, [a, b, c]);

  return <canvas ref={canvasRef} width={400} height={400} style={{ border: "1px solid gray" }} />;
};