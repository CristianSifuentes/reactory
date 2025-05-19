import React ,{  useEffect, useRef, useState } from "react";


export const SineWaveTimer = () => {
    
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
        if(timerRef.current) {
            clearInterval(timerRef.current);
        }
       };
        
    }, []);

   return (
    <div className="math-card">
      <h3>📈 Sine Timer Simulation</h3>
      <p>Angle: {angle} degrees</p>
      <p>Sine Value: {value.toFixed(4)}</p>
    </div>
   );
}