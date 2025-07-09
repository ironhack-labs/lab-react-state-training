import React from "react";
import LikeButton from "./components/LikeButton";
import Counter from "./components/Counter";
import "./App.css";
import ClickablePicture from "./components/ClickablePicture";
import Dice from "./components/Dice";


function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <LikeButton className="likes" />
      <LikeButton className="likes" />
      
      <div className="counter">
        <Counter />
      </div>

      <ClickablePicture className= "img"/>
      <Dice className = "dice"/>

    </div>



  );
}

export default App;
