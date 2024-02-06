//import { useState } from 'react'
import "./App.css";
import LikeButton from "./components/LikeButton"
import Counter from "./components/Counter";
import ClickablePicture from "./components/ClickablePicture"
import Dice from "./components/Dice"
import DiscoButton from "./components/DiscoButton";

function App() {
  return (
    <div>
      <LikeButton />
      <Counter />
      <ClickablePicture />
      <Dice />
      <DiscoButton />
    </div>
  );
}

export default App;
