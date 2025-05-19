import { useState, useEffect, useRef, useDebugValue } from 'react';

export const useSineTimer = () => {
  const [angle, setAngle] = useState(0);
  const [value, setValue] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setAngle(prev => {
        const nextAngle = prev + 15;
        setValue(Math.sin(nextAngle * Math.PI / 180));
        return nextAngle;
      });
    }, 1000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  useDebugValue(`angle=${angle}, value=${value.toFixed(4)}`);

  return { angle, value };
};
