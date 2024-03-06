import { useState } from "react";
import "./App.css";
import { LikeButton } from "./components/LikeButton.JSX";
import { Counter } from "./components/Counter.JSX";
import { ClickablePicture } from "./components/ClickablePicture.JSX";
import { DiceRandom } from "./components/DiceRandom.JSX";

import diceEmpty from "./assets/images/dice-empty.png";
import dice1 from "./assets/images/dice1.png";
import dice2 from "./assets/images/dice2.png";
import dice3 from "./assets/images/dice3.png";
import dice4 from "./assets/images/dice4.png";
import dice5 from "./assets/images/dice5.png";
import dice6 from "./assets/images/dice6.png";

function App() {
  const [likeCounter, setLikeCounter] = useState(0);
  const [counter, setCounter] = useState(0);
  const [checkImg, setcheckImg] = useState(true);
  const [diceImg, setDiceImg] = useState(diceEmpty);

  const diceArr = [dice1, dice2, dice3, dice4, dice5, dice6];

  const addLike = () => {
    setLikeCounter(likeCounter + 1);
  };
  const plusCounter = () => {
    setCounter(counter + 1);
  };
  const minusCounter = () => {
    if (counter <= 0) {
      breake;
    } else {
      setCounter(counter - 1);
      if (counter <= 0) {
        breake;
      }
    }
  };

  const changeImgFunc = () => {
    setcheckImg(!checkImg);
  };

  const diceFunc = () => {
    console.log("sss");
    setDiceImg(diceEmpty);
    let random = Math.floor(Math.random() * 6) + 1;
    setTimeout(() => {
      setDiceImg(diceArr[random - 1]);
    }, 1000);
  };

  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <h2>Iretation 1</h2>
      <LikeButton
        likeCounter={likeCounter}
        setLikeCounter={setLikeCounter}
        addLike={addLike}
      />

      <h2>Iretation 2</h2>
      <Counter
        plusCounter={plusCounter}
        minusCounter={minusCounter}
        counter={counter}
      />

      <h2>Iretation 3</h2>
      <ClickablePicture checkImg={checkImg} changeImgFunc={changeImgFunc} />

      <h2>Iretation 4</h2>
      <DiceRandom diceFunc={diceFunc} diceImg={diceImg} setDiceImg={setDiceImg}/>
    </div>
  );
}

export default App;
