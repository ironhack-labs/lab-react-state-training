import "./App.css";
import { useState } from "react";
import LikeButton from "./components/LIkeButton";
import Counter from "./components/Counter";
import ClickablePicture from "./components/ClickablePicture";
import Dice from "./components/Dice";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <LikeButton />
      <br></br>
      <Counter />
      <br></br>
      <ClickablePicture />
      <br></br>
      <Dice />
    </div>
  );
}

export default App;
