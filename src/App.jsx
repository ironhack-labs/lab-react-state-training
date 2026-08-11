import React from "react";
import LikeButton from "./components/LikeButton";
import Counter from "./components/Counter";
import ClickablePicture from "./components/ClickablePicture";
import Dice from "./components/Dice";

function App() {
  return (
    <div>
      <LikeButton />
      <Counter />
      <ClickablePicture />
      <Dice />
    </div>
    
  );
}

export default App;