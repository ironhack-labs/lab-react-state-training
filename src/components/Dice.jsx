import { useState } from "react";

function Dice() {
  const [image, setImage] = useState("../public/images/dice-empty.png");

  const mouseClick = () => {
    setImage("../public/images/dice-empty.png");

    setTimeout(() => {
      const numbers = Math.floor(Math.random() * 6) + 1;
      setImage(`../public/images/dice${numbers}.png`);
    }, 1000);
  };

  return (
    <div>
      <img
        src={image}
        alt="A face of a dice"
        onClick={mouseClick}
        style={{ cursor: "pointer" }}
        height="120"
      />
    </div>
  );
}

export default Dice;
