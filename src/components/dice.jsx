import { useState } from "react";
import empty from "../assets/images/dice-empty.png";
import d1 from "../assets/images/dice1.png";
import d2 from "../assets/images/dice2.png";
import d3 from "../assets/images/dice3.png";
import d4 from "../assets/images/dice4.png";
import d5 from "../assets/images/dice5.png";
import d6 from "../assets/images/dice6.png";

const faces = [d1, d2, d3, d4, d5, d6];

function Dice() {
  const [face, setFace] = useState(0);

  const rollDice = () => {
    setFace(null);
    setTimeout(() => {
      const random = Math.floor(Math.random() * 6);
      setFace(random);
    }, 1000);
  };

  const src = face === null ? empty : faces[face];

  return <img src={src} alt="Dice" onClick={rollDice} style={{ cursor: "pointer", display: "flex", maxHeight: "50px"}} />;
}

export default Dice;