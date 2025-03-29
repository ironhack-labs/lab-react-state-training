import { useState } from "react";
function Dice() {
  const [diceImage, setDiceImage] = useState("../assets/images/dice-empty.png");
  const handleClicks = () => {
    setDiceImage('../assets/images/dice-empty.png');
    setTimeout(() => {
      const randomDice = Math.floor(Math.random() * 6) + 1;
      setDiceImage(`../assets/images/dice${randomDice}.png`);
    }, 1000);
  };
  return (
    <div>
      <img
        src={diceImage}
        alt="Dice"
        onClick={handleClicks}
      />
    </div>
  );
}
export default Dice;
