import { useState } from "react";

function Dice(){
  
  const [source, setNumber] = useState("src/assets/images/dice-empty.png");

  const updateDice = () => {
    const random = Math.floor(Math.random() * (6 - 1) + 1);
    const src = `src/assets/images/dice${random}.png`;
    setNumber("src/assets/images/dice-empty.png");
    setTimeout(() => {
      setNumber(src)
    }, 1000);
  }

  return (
    <div className="Dice">
      <img src={source} alt="Dice" onClick={() => updateDice()} />
    </div>
  );
}

export default Dice;