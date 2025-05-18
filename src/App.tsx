import { CellColony } from './components/Container';
import { Counter } from './components/Counter';
import { QuadraticController } from './components/QuadraticController';
import { QuadraticPlot } from './components/QuadraticPlot';
import { User } from './components/User';
import { EquationVisualizer } from './components/EquationVisualizer';
import { MathProvider } from './components/MathContext';
import { EquationSelector } from './components/EquationSelector';
import { useRef } from 'react';
import { Timer } from './components/Timer';
import { TimerChild } from './components/TimerChild';

function App() {
  return (
    <div className="App">
      <h1>React + Typescript</h1>
      <hr></hr>

      <h2>useState</h2>
      <Counter></Counter>
      <User></User>

      <h2>usseEffect - useRef</h2>
      <br/>

      <Timer></Timer>

{/* 
      <h2></h2>
      <QuadraticController></QuadraticController>
      <h2>Quadratic Plot</h2>

        <h2>Cell Colony</h2>
        <CellColony></CellColony>


        <MathProvider>
          <h1>🧠 Equation Simulation</h1>
          <EquationSelector />
          <EquationVisualizer />
        </MathProvider> */}

        



    </div>
  );
}

export default App;
