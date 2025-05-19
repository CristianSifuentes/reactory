import React from 'react';
import { useSineTimer } from './useSineTimer';

export const SineWaveTimer2 = () => {
  const { angle, value } = useSineTimer();

  return (
    <div className="math-card">
      <h3>📈 Sine Timer Simulation</h3>
      <p>Angle: {angle} degrees</p>
      <p>Sine Value: {value.toFixed(4)}</p>
    </div>
  );
};