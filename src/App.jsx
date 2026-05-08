import LikeButton from "./componant/LikeButton";
import Counter from "./componant/Counter";
import ClickablePicture from "./componant/ClickablePicture";
import maxence from "./assets/images/maxence.png";
import maxenceGlasses from "./assets/images/maxence-glasses.png";
import Dice from "./componant/Dice";
import emptyDice from "./assets/images/dice-empty.png";
import dice1 from "./assets/images/dice1.png";
import dice2 from "./assets/images/dice2.png";
import dice3 from "./assets/images/dice3.png";
import dice4 from "./assets/images/dice4.png";
import dice5 from "./assets/images/dice5.png";
import dice6 from "./assets/images/dice6.png";
import { useState } from "react";
import "./App.css";

const picArr = [
        {
          name: "Maxence",
          image: maxence,
          image2: maxenceGlasses,
          clicked: false,
        
        },

    ]

    const dicePic = [
      {
        emptyDice: emptyDice,
        dice1: dice1,
        dice2: dice2,
        dice3: dice3,
        dice4: dice4,
        dice5: dice5,
        dice6: dice6,
        clicked: false,

      }
    ]

function App() {
  const [pics, setPics] = useState(picArr)

  const pickablePic = (index) => {
    const updatedPics = pics.map((pic, i) => {
      if (i === index) {
        return {
          ...pic,
          clicked: !pic.clicked,
        };
      }
      return pic;
    });

  setPics(updatedPics);
  };

  const [dicePic, setDicePic] = useState(dicePic)
  const dice = (index) => {
    const updateDice = dicePic.random((dicePic, i) => {
      if (i === index) {
        return {
          ...dicePic,
          clicked: !dicePic.clicked,
        }
      }
    });
    setDicePic(updateDice);

  }


  return (
    <div className="App">
      <h1> LAB | React Training</h1>

      <LikeButton />
      <Counter />
      <Dice />

    
  <div className="max">
    {pics.map((pic, i) => (
    <ClickablePicture
    key={i}
    pic={pic}
    onClick={() => pickablePic(i)}
    />
  ))}
</div>

{dicePic.map((dice, i) => (
  <Dice
  key={i}
  dicePic={dicePic}
  onClick={() => dice(i)}
  />
))}

    </div>
    
    )
  }
  

export default App;

  