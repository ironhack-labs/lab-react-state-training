import React from "react";
import LikeButton from "./components/LikeButton";
import Counter from "./components/Counter";
import ClickablePicture from "./components/Clickablepicture";
import Dice from "./components/Dice";

const App = () => {
  return (
    <div>
      <h1>Like Button</h1>
      <h2>Counter</h2>
      <h3>ClickablePicture</h3>
      <h4>Dice</h4>
      <LikeButton />
      <LikeButton />
      <Counter />
      <ClickablePicture />
      <Dice />
    </div>
  );
};

export default App;
