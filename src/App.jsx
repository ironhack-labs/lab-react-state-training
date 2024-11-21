import "./App.css";
import React from "react";
import LikeButton from "./components/like-button/like-button";
import Counter from "./components/counter/counter";
import ClickablePicture from "./components/clickable-picture/clickable-picture";
import img1 from "./assets/images/maxence.png";
import img2 from "./assets/images/maxence-glasses.png";
import Dice from "./components/dice/dice";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <LikeButton/>
      <Counter/>
      <ClickablePicture img1={img1} img2={img2}/>
      <Dice/>
    </div>
  );
}

export default App;
