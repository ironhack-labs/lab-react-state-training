import { useState } from "react";

function Dice() {
  const [dice, setDice] = useState("src/assets/images/dice-empty.png");

  const diceArray = [
    "src/assets/images/dice1.png",
    "src/assets/images/dice2.png",
    "src/assets/images/dice3.png",
    "src/assets/images/dice4.png",
    "src/assets/images/dice5.png",
    "src/assets/images/dice6.png",
  ];

  const diceHandler = () => {
    const random = Math.floor(Math.random() * diceArray.length);
    setDice("src/assets/images/dice-empty.png");
    setTimeout(() => {
      setDice(diceArray[random]);
    }, 1000);
  };

  return (
    <>
      <img className="dice" onClick={diceHandler} src={dice} alt="dice"></img>
    </>
  );
}

export default Dice;
