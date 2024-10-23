import "./App.css";
import { useState } from "react";
import LikeButton from "./components/LikeButton";
import Counter from "./components/Counter";
import ClickablePicture from "./components/ClickablePicture";
import maxence from "./assets/images/maxence.png";
import maxenceGlasses from "./assets/images/maxence-glasses.png";

function App() {
  return (
    <div className="App">
      <LikeButton />
      <Counter />
      <ClickablePicture img1={maxence} img2={maxenceGlasses} />
    </div>
  );
}

export default App;
