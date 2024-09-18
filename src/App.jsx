import "./App.css";
import React, { useState } from "react";
import LikeButton from "./components/LikeButton";
import Counter from "./components/Counter";
import ClickablePicture from "./components/ClickablePicture";
import img1 from "./assets/images/maxence.png";
import img2 from "./assets/images/maxence-glasses.png";

import Dice from "./components/Dice";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <LikeButton />
      <LikeButton />
      <Counter />
      <ClickablePicture img1={img1} img2={img2} />
      <Dice />
    </div>
  );
}

export default App;
