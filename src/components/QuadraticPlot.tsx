import React, { use, useEffect } from "react";

interface QuadraticProps {
  a: number;
  b: number;
  c: number;
}

export const QuadraticPlot: React.FC<QuadraticProps> = ({ a, b, c }) => { 

    const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
    
    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();

        // Draw quadratic curve
        for (let x = -100; x <= 100; x++) {
        const scaledX = canvas.width / 2 + x;
        const y = a * x * x + b * x + c;
        const scaledY = canvas.height / 2 - y;

        if (x === -100) ctx.moveTo(scaledX, scaledY);
        else ctx.lineTo(scaledX, scaledY);
        }

        ctx.strokeStyle = "#007acc";
        ctx.lineWidth = 2;
        ctx.stroke();


    }, [a, b, c]); // Re-draw when any coefficient changes

    
    return (
    <div>
      <canvas ref={canvasRef} width={400} height={400} style={{ border: "1px solid #ccc" }} />
    </div>
    );
}
