import React from "react";
import "./App.css";
import LikeButton from "./components/LikeButton";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      
      <LikeButton/>
      <Counter/>
      <ClickablePicture/>
      <Dice/>

    </div>
  );
}

export default App;
