/*import "./App.css";*/

import { useState } from "react";
import LikeButton from "./components/LikeButton";
import Counter from "./components/Counter";
import ClickablePicture from "./components/ClickablePicture";

function App () {
  return (
    <>
    <LikeButton />
    <Counter/>
    <ClickablePicture />
    </>
      
      
    );
  }

export default App;
