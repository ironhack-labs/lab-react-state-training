import { useState } from "react";
import empty from "../assets/images/dice-empty.png";
import one from "../assets/images/dice1.png";
import two from "../assets/images/dice2.png";
import three from "../assets/images/dice3.png";
import four from "../assets/images/dice4.png";
import five from "../assets/images/dice5.png";
import six from "../assets/images/dice6.png";

export default function Dice() {
  const array = [one, two, three, four, five, six];
  const [source, setSource] = useState(array[Math.floor(Math.random() * 5)]);

  const handleClick = () => {
    const index = Math.floor(Math.random() * 5);
    setSource(empty);
    setTimeout(function () {
      setSource(array[index]);
    }, 1000);
  };

  return (
    <div>
      <img src={source} alt="dice" onClick={handleClick} />
    </div>
  );
}
