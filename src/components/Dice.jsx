import { useState } from "react";

function Dice() {
  let diceArray = [
    "src/assets/images/dice1.png",
    "src/assets/images/dice2.png",
    "src/assets/images/dice3.png",
    "src/assets/images/dice4.png",
    "src/assets/images/dice5.png",
    "src/assets/images/dice6.png",
  ];
  let [oneDice, selectDice] = useState("src/assets/images/dice-empty.png");
  const juggleDice = () => {
    const randomIndex = Math.floor(Math.random() * diceArray.length);
    selectDice(diceArray[randomIndex]);
  };

  return <image src={oneDice} onClick={juggleDice} />;
}
