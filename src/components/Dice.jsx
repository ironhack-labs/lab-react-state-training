import { useState } from "react";

function Dice() {
  const diceArr = [
    "/src/assets/images/dice1.png",
    "/src/assets/images/dice2.png",
    "/src/assets/images/dice3.png",
    "/src/assets/images/dice4.png",
    "/src/assets/images/dice5.png",
    "/src/assets/images/dice6.png",
  ];
  const diceBlank = "/src/assets/images/dice-empty.png";

  const genRandomNum = () => {
    return Math.floor(Math.random() * 6);
  };

  let startDice = diceArr[genRandomNum()];

  const [diceValue, setDiceValue] = useState(startDice);

  const rollDice = () => {
    setDiceValue(diceBlank);
    setTimeout(() => {
      setDiceValue(diceArr[genRandomNum()]);
    }, 1000);
  };
  
  return (
    <div>
      <img onClick={rollDice} src={diceValue} alt="" width="200px" />
    </div>
  );
}

export default Dice;
