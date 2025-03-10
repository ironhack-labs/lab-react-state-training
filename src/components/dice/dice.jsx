import { useState } from "react";

const diceImages = [
  "/src/assets/images/dice1.png",
  "/src/assets/images/dice2.png",
  "/src/assets/images/dice3.png",
  "/src/assets/images/dice4.png",
  "/src/assets/images/dice5.png",
  "/src/assets/images/dice6.png",
];
const emptyDice = "/src/assets/images/dice-empty.png";

function Dice({ style = {}, className = '' }) {
  const [firstDice, setNewDice] = useState(diceImages[0]);

  const rollDice = () => {
   
    setNewDice(emptyDice);

   
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * diceImages.length);
      setNewDice(diceImages[randomIndex]);
    }, 1000);
  };

  return (
    <div className={`${className}`} style={style}>
      <img
        src={firstDice}
        alt="Dice"
        onClick={rollDice}
        style={{ cursor: "pointer", width: "200px" }}
      />
    </div>
  );
}

export default Dice;
