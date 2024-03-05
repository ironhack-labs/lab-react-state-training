// App.jsx
import React from 'react';
import "./App.css";
import LikeButton from './components/LikeButton';
import Counter from './components/Counter';

import ClickablePicture from './components/ClickablePicture'; 
import Dice from './components/Dice';

const App = () => {
  return (
    <div className="App">
      <h1>LAB | React Training</h1>

      <section>
        <h2>Iteration 1 | LikeButton</h2>
        <LikeButton />
      </section>

      <section>
        <h2>Iteration 2 | Counter</h2>
        <Counter />
      </section>

      <section>
        <h2>Iteration 3 | ClickablePicture</h2>
        <ClickablePicture /> 
      </section>
      <section>
        <h2>Iteration 4 | Dice</h2>
        <Dice />
      </section>
    </div>
  );
};

export default App;