import { CellColony } from './components/Container';
import { Counter } from './components/Counter';
import { QuadraticController } from './components/QuadraticController';
import { QuadraticPlot } from './components/QuadraticPlot';
import { User } from './components/User';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <h1>React + Typescript</h1>
      <hr></hr>

      <h2>useState</h2>
      <Counter></Counter>
      <User></User>


      <h2></h2>
      <QuadraticController></QuadraticController>
      <h2>Quadratic Plot</h2>
      {/* <QuadraticPlot a={1} b={2} c={3}></QuadraticPlot> */}

        <h2>Cell Colony</h2>
        <CellColony></CellColony>
    </div>
  );
}

export default App;
