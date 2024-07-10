import { useState } from "react";
// import emptyDice from "./assets/dice-empty.png";
// import dice1 from "src/assets/dice1.png";
// import dice2 from "src/assets/dice2.png";
// import dice3 from "src/assets/dice3.png";
// import dice4 from "src/assets/dice4.png";
// import dice5 from "src/assets/dice5.png";
// import dice6 from "src/assets/dice6.png";

export default function Dice() {
  const [dice, setDice] = useState(0);

  const rollDice = () => {
    setDice(0);
    setTimeout(() => {
      let randomIndex = Math.floor(Math.random() * 6 + 1);
      setDice(randomIndex);
    }, 1000);
  };

  return (
    <img
      className="dice"
      onClick={rollDice}
      src={
        !dice
          ? "src/assets/images/dice-empty.png"
          : dice === 1
          ? "src/assets/images/dice1.png"
          : dice === 2
          ? "src/assets/images/dice2.png"
          : dice === 3
          ? "src/assets/images/dice3.png"
          : dice === 4
          ? "src/assets/images/dice4.png"
          : dice === 5
          ? "src/assets/images/dice5.png"
          : "src/assets/images/dice6.png"
      }
      alt={`dice-face-${dice}`}
    />
  );
}
