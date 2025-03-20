import "./App.css";
import React from "react";
import LikeButton from "./components/LikeButton";
import Counter from "./components/Counter";
import ClickablePic from "./components/Clickablepic";
import Dice from "./components/Dice";
function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <LikeButton />
      <Counter />
      <ClickablePic />
      <Dice />
    </div>
  );
}

export default App;
