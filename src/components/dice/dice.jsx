import { useState } from "react";

function Dice({ className = "" }) {
  const [image, setImage] = useState("/src/assets/images/dice3.png");
  const handleClick = (e) => {
    e.target.src = setImage("src/assets/images/dice-empty.png");
    setTimeout(() => {
      setImage("src/assets/images/dice6.png");
    }, 1000);
  };

  return (
    <img
      src={image}
      className=" rounded  {className} max-width:25% height: auto"
      alt=""
      onClick={handleClick}
    />
  );
}
export default Dice;
