import React from "react";
import LikeButton from "./components/LikeButton";
import Counter from "./components/Counter";
import ClickPicture from "./components/Clickpicture";
import "./App.css";
import Dice from "./components/Dice";
import DiscoButton from "./components/DiscoButton";

function App() {
  return (
    <div className="container">
      <h1>LAB | React Training</h1>
      <div className="like-button-container">
        <DiscoButton />
        <DiscoButton />
      </div>
      <div className="counter-container">
        <Counter />
      </div>
      <div className="click-picture">
        <ClickPicture />
      </div>
      <div className="dice-container">
        <Dice />
      </div>
    </div>
  );
}

export default App;
