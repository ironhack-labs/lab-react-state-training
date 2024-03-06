import "./App.css";
import react, { useState } from "react";
import Likes from "./components/Likes";
import Counter from "./components/Counter";
import { Clickable } from "./components/Clickable";
import Dice from "./components/Dice";


function App() {

  const [likesState, setLikesState] = useState(0);
  const addLike = () => {
    setLikesState(likesState + 1);
  }

  const [counterState, setCounterState] = useState(1);
  const [clickableState, setClickableState] = useState(true);
  const [diceImage, setDiceImage] = useState('../assets/images/dice-empty.png');


  return (
    <>
      <Likes likes={likesState} setLikesState={setLikesState} />
      <Counter counter={counterState} setCounterState={setCounterState} />
      <Clickable clickable={clickableState} setClickableState={setClickableState} />
      <Dice  dice={diceImage} setDiceImage={setDiceImage} />
    </>
  );
}

export default App;
