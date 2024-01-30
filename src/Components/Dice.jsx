import { useState } from "react";

function Dice() {
  const [diceImage, setDiceImage] = useState(
    "src/assets/images/dice-empty.png"
  );
  const [rolling, setRolling] = useState(false);

  const rollDice = () => {
    setDiceImage("src/assets/images/dice-empty.png");
    setRolling(true);

    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 6) + 1;
      setDiceImage(`src/assets/images/dice${randomNumber}.png`);
      setRolling(false);
    }, 1000);
  };

  return (
    <div>
      <img
        src={diceImage}
        alt="Dice"
        style={{ width: "200px", height: "200px", cursor: "pointer" }}
        onClick={() => !rolling && rollDice()}
      />
    </div>
  );
}

export default Dice;
