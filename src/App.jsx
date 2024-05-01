import { useState } from "react";
import "./App.css";
import Likebutton from "./components/LikeButton/LikeButton";
import Counter from "./components/Counter/Counter";
import ClickablePicture from "./components/ClickablePicture/ClickablePicture";
import Dice from "./components/Dice/dice";

function App() {
  return (
    <div className="App">

      <Likebutton />

      <hr />

      <Counter />

      <hr />

      <ClickablePicture />

      <hr />

      <Dice />

    </div>
  );
}

export default App;
