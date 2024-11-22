import "./App.css";
import LikedButton from "./components/likedbutton"
import Counter from "../src/components/Counter"
import ClickablePicture from "../src/components/ClickablePicture"
import { useState } from "react";


function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <LikedButton></LikedButton>
      <LikedButton></LikedButton>
      <Counter></Counter><br></br>
      <ClickablePicture></ClickablePicture>
      
    </div>
  );
}

export default App;
