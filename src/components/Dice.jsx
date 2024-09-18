import React from "react";
import { useState } from "react";

let images = [
  "../src/assets/images/dice-empty.png",
  "../src/assets/images/dice1.png",
  "../src/assets/images/dice2.png",
  "../src/assets/images/dice3.png",
  "../src/assets/images/dice4.png",
  "../src/assets/images/dice5.png",
  "../src/assets/images/dice6.png",
];

export default function Dice() {
  const [seleccionarDado, setSeleccionarDado] = useState(
    "../src/assets/images/dice-empty.png"
  );

  const handleClick = () => {
    let indix = Math.floor(Math.random() * images.length);
    setSeleccionarDado(images[indix]);
  };

  return (
    <div>
      <img onClick={handleClick}src={seleccionarDado} alt="imagen" />
    </div>
  );
}
