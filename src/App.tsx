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
import { SineWaveTimer } from './components/SineWaveTimer';
import { SineWaveTimer2 } from './components/SineWaveTime2r';
import React from 'react';
import { TextInput, TextInputHandle } from './components/TextInput';


function App() {
  const inputRef = useRef<TextInputHandle>(null);

  return (
    <div className="App">
      <h1>React + Typescript</h1>
      <hr></hr>
      <hr></hr>

      <h2>useState</h2>
      <Counter></Counter>
      <User></User>

      <h2>usseEffect - useRef</h2>
      <br/>

      {/* <Timer></Timer> */}

      <h2>Other</h2>

      <SineWaveTimer></SineWaveTimer> 
      <SineWaveTimer2></SineWaveTimer2>

      <h2>Imperative Handle Demo</h2>
      <TextInput ref={inputRef} />
      <button onClick={() => inputRef.current?.focus()}>
        Focus Input
      </button>

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
