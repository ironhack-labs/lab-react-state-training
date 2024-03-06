import "./App.css";
import LikeButton from "./components/LikeButton";
import Counter from "./components/Counter";
import ClickablePicture from "./components/ClickablePicture";
import { useState } from "react";
import photo1 from "../src/assets/images/maxence.png";
import Dice from "./components/Dice";

function App() {
  const [like, setLike] = useState(0);
  const [counter, setCounter] = useState(0);
  const [picture, setPicture] = useState(photo1);
  const [dice, setDice] = useState();

  return (
    <div className="App">
      <LikeButton like={like} setLike={setLike} />{" "}
      <Counter counter={counter} setCounter={setCounter} />
      <ClickablePicture picture={picture} setPicture={setPicture} />
      <Dice dice={dice} setDice={setDice} />
    </div>
  );
}

export default App;
