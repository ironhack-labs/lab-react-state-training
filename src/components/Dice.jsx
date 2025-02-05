import { useState } from "react";

function Dice() {
  const imageArray = [
    "../src/assets/images/dice-empty.png",
    "../src/assets/images/dice1.png",
    "../src/assets/images/dice2.png",
    "../src/assets/images/dice3.png",
    "../src/assets/images/dice4.png",
    "../src/assets/images/dice5.png",
    "../src/assets/images/dice6.png",
  ];
  const [initialDice, setInitialDice] = useState(imageArray[0]);

  const changeImage = () => {
    const randomNumber = Math.floor(Math.random() * (5 - 0)) + 0;
    const randomeImage = imageArray[randomNumber];
    setInitialDice(randomeImage);
  };

  return (
    <div>
      <img onClick={changeImage} src={initialDice} alt="dice-image" />
    </div>
  );
}
export default Dice;
