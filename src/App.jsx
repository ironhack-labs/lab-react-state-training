import "./App.css";
import React from 'react';
import LikeButton from './components/likebutton';
import Counter from './components/counter';
import ClickablePicture from "./components/clickablepicture";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <LikeButton />
      <Counter />
      <ClickablePicture />
    </div>
  );
}

export default App;
