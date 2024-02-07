import { useState } from "react";
import "./App.css";

import LikeButton from "./components/LikeButton";
import ClickablePicture from "./components/ClickablePicture";



function App() {
  return (

    <>
      <div className="App">
        <h1> LAB | React Training</h1>
      </div>
      <LikeButton />

      <ClickablePicture />
    </>



  );
}

export default App;
