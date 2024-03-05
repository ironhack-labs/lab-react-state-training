import { useState } from "react";
import "./App.css";
import { LikeButton } from "./components/LikeButton";
import { Counter } from "./components/Counter";
import { ClickablePicture } from "./components/ClickablePicture";
import img from "./assets/images/maxence.png";
import coolerImg from "./assets/images/maxence-glasses.png"

function App() {
  const [likeState, setLikeState] = useState(0);
  const addLike = () => {
    setLikeState(likeState + 1)
  };

  const [counterState, setCounterState] = useState(0);
  const increment = () => {
    setCounterState(counterState + 1)
  };
  const decrement = () => {
    if(counterState > 0){
      setCounterState(counterState - 1)
    }
    
  };

  const [pictureState, setPictureState] = useState(img);
  const coolerPic = () => {
    setPictureState(coolerImg)
  };

  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <LikeButton like={likeState} addLike={addLike}/>
      <Counter initValue = {counterState} incrValue = {increment} decrValue = {decrement}/>
      <ClickablePicture originalPic = {img} coolerImg = {coolerPic}/>
    </div>
  );
}

export default App;
