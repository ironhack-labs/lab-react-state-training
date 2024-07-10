import { useState } from "react";
import diceEmpty from "../assets/dice-empty.png";
import dice1 from "../assets/dice1.png";
import dice2 from "../assets/dice2.png";
import dice3 from "../assets/dice3.png";
import dice4 from "../assets/dice4.png";
import dice5 from "../assets/dice5.png";
import dice6 from "../assets/dice6.png";

/*export default function Dice() {
  const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];
  const [version, setVersion] = useState(dice1);

  const toggleVersion = () => {
    setVersion(diceEmpty);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * diceImages.length);
      setVersion(diceImages[randomIndex]);
    }, 1000);
  };

  return (
    <div>
      <img className="dice" src={version} alt="dice" onClick={toggleVersion} />
    </div>
  );
} */

export default function Dice() {
  const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];
  const [version, setVersion] = useState(dice3);

  const toggleVersion = () => {
    setVersion(diceEmpty);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * diceImages.length);
      setVersion(diceImages[randomIndex]);
    }, 1000);
  };

  return (
    <div>
      <img className="dice" src={version} onClick={toggleVersion} />
    </div>
  );
}
