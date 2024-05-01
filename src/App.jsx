import "./App.css";
import LikeButton from "./components/LikeButton";
import Counter from "./components/Counter";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      < LikeButton/>
      <br />
      <Counter />
    </div>
  );
}

export default App;
