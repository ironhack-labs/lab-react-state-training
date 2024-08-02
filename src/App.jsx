import "./App.css";
import React from "react";
import LikeButton from "./components/LikeButton";
import Counter from "./components/Counter";
import ClickablePicture from "./components/ClickAblePicture";
import Dice from "./components/Dice";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <pre>
      <LikeButton /> <LikeButton />
      </pre>
      <Counter />
      <ClickablePicture />
      <Dice />
    </div>
  );
}

export default App;
