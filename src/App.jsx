import React from 'react';
import LikeButton from './components/LikeButton.jsx';
import Counter from "./components/Counter.jsx"
import ClickablePicture from './components/ClickablePicture.jsx';
import Dice from './components/Dice.jsx';

function App() {
  return (
    <div className="App">
      <h1>Interactive Counter</h1>
      <Counter/>
      {/* <LikeButton/> */}
      <ClickablePicture/>
      <Dice/>
    </div>
  );
}

export default App;
