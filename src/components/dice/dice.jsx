import { useState } from "react";

function Dice({ className = "" }) {
  const diceImages = [
    "/src/assets/images/dice1.png",
    "/src/assets/images/dice2.png",
    "/src/assets/images/dice3.png",
    "/src/assets/images/dice4.png",
    "/src/assets/images/dice5.png",
    "/src/assets/images/dice6.png",
  ];

  const emptyDice = "/src/assets/images/dice-empty.png";

  const [currentDice, setCurrentDice] = useState(
    diceImages[Math.floor(Math.random() * diceImages.length)]
  );

  const handleClick = () => {
    setCurrentDice(emptyDice); 
    setTimeout(() => {
      
      setCurrentDice(
        diceImages[Math.floor(Math.random() * diceImages.length)]
      );
    }, 1000);
  };

  return (
    <div
      className={`d-flex justify-content-center align-items-center ${className}`}
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <img
        src={currentDice}
        alt="Dice"
        className="img-fluid"
        style={{ maxWidth: "200px" }}
      />
    </div>
  );
}

export default Dice;
