import "./App.css";
import { ClickablePicture } from "./components/ClickablePicture";
import { Counter } from "./components/Counter";
import Dice from "./components/Dice";
import LikeButton from "./components/LikeButton";
import { useState } from "react";

function App() {
  const [likes, setLikes] = useState(0);

  const handleLikeClick = () => {
    setLikes(likes + 1);
  };

  const [count, setCount] = useState(0);

  const handleCounterIncreament = () => {
    setCount(count + 1);
  };

  const handleCounterDecreament = () => {
    if (count < 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <LikeButton handleCliked={handleLikeClick} likes={likes} />

      <Counter
        increment={handleCounterIncreament}
        decrement={handleCounterDecreament}
        value={count}
      />
      <ClickablePicture />
      <Dice />
    </div>
  );
}

export default App;
