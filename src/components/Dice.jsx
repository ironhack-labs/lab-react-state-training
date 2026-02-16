import { useState } from "react";

const diceImages = [
  "https://raw.githubusercontent.com/ironhack-labs/lab-react-state-training/master/src/assets/images/dice1.png",
  "https://raw.githubusercontent.com/ironhack-labs/lab-react-state-training/master/src/assets/images/dice2.png",
  "https://raw.githubusercontent.com/ironhack-labs/lab-react-state-training/master/src/assets/images/dice3.png",
  "https://raw.githubusercontent.com/ironhack-labs/lab-react-state-training/master/src/assets/images/dice4.png",
  "https://raw.githubusercontent.com/ironhack-labs/lab-react-state-training/master/src/assets/images/dice5.png",
  "https://raw.githubusercontent.com/ironhack-labs/lab-react-state-training/master/src/assets/images/dice6.png"
];

function Dice() {
  const [dice, setDice] = useState(diceImages[0]);

  const rollDice = () => {

    // This line changes the state React says: “state changed → I need to re-render”
    setDice("https://raw.githubusercontent.com/ironhack-labs/lab-react-state-training/master/src/assets/images/dice-empty.png");

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * diceImages.length);
      setDice(diceImages[randomIndex]); // This line changes the state to random image
    }, 500);
  };

  return (
    <img
      src={dice}
      alt="dice"
      width="100"
      style={{ cursor: "pointer" }}
      onClick={rollDice}
    />
  );
}

export default Dice;
