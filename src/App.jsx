import React from 'react';
import LikeButton from './assets/Components/LikeButton/LikeButton';
import Counter from './assets/Components/Counter/Counter';
import ClickablePicture from './assets/Components/ClickablePicture/ClickablePicture';
import Dice from 'C:/Users/paulr/Desktop/IronHack/lab-react-state-training/src/assets/Components/Dice/Dice';
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <LikeButton />
      <Counter />
      <ClickablePicture />
      <Dice />
      
    </div>
  );
}

export default App;
