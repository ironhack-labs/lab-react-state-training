import { useState } from "react";

function Dice() {
  // State to track the current dice image
  const [diceImage, setDiceImage] = useState("src/assets/images/dice1.png");

  // List of dice images
  const diceImages = [
    "src/assets/images/dice1.png",
    "src/assets/images/dice2.png",
    "src/assets/images/dice3.png",
    "src/assets/images/dice4.png",
    "src/assets/images/dice5.png",
    "src/assets/images/dice6.png"
  ];

  // Function to handle dice click
  const rollDice = () => {
    // Set to empty dice image first
    setDiceImage("src/assets/images/dice-empty.png");

    // Wait for 1 second, then set a random dice image
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * diceImages.length); // Random index
      setDiceImage(diceImages[randomIndex]); // Update dice image
    }, 1000); // 1 second delay
  };

  return (
    <div>
      <img
        src={diceImage}
        alt="Dice"
        style={{ width: "100px", cursor: "pointer" }}
        onClick={rollDice} // Roll dice on click
      />
    </div>
  );
}

export default Dice;
