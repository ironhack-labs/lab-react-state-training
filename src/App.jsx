import "./App.css";
import ClickablePicture from "./components/ClickablePicture";
import Counter from "./components/Counter";
import Dice from "./components/Dice";
import LikeButton from "./components/LikeButton";
import { useState } from 'react';

function App() {

  const [like, setLike] = useState(0);
  const [count, setCount] = useState(0);
  const [defaultImage, setDefaultImage] = useState(true);
  const [dice,setDice] = useState();
  return (
    <div className="App">
      <h1> LAB | React Training</h1>

      <LikeButton likes={like} setLike={setLike}/>

      <LikeButton likes={like} setLike={setLike}/>

      <Counter count={count} setCount={setCount}/>

      <ClickablePicture defaultImage={defaultImage} setDefaultImage={setDefaultImage}/>

      <Dice dice={dice} setDice={setDice}/>
    </div>
  );
}

export default App;
