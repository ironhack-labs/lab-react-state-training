import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LikeButton from "./components/LikeButton";
import Counter from "./components/Counter";
import ClickablePicture from "./components/ClickablePicture";
import Dice from "./components/Dice";

function App() {
  return (
    <div>
      <LikeButton /> <br />
      <Counter /> <br />
      <ClickablePicture /> <br />
      <Dice />
    </div>
  );
}

export default App;
