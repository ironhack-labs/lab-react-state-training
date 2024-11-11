import "./App.css";
import Carousel from "./components/Carousel";
import ClickablePicture from "./components/ClickablePicture";
import Counter from "./components/Counter";
import Dice from "./components/Dice";
import DiscoButton from "./components/DiscoButton";
import LikeButton from "./components/LikeButton";
import { useState } from "react";

function App() {
  const [likes, setLikes] = useState(0);

  function increment() {
    setLikes(likes + 1)
  }

  function decrement() {
    if(likes <= 0) {
      alert("Likes can not be negative")
    } else setLikes(likes - 1)
  }

  return (
    <div className="App">
      <h1> LAB | React Training</h1>

      <LikeButton increment={increment} likes={likes} />
      <Counter increment={increment} likes={likes} decrement={decrement}/>
      <ClickablePicture />
      <Dice/>
      <DiscoButton increment={increment} likes={likes} setLikes={setLikes}/>
      <Carousel images={[
    "https://randomuser.me/api/portraits/women/1.jpg",
    "https://randomuser.me/api/portraits/men/1.jpg",
    "https://randomuser.me/api/portraits/women/2.jpg",
    "https://randomuser.me/api/portraits/men/2.jpg"
  ]}/>
    </div>
  );
}

export default App;
