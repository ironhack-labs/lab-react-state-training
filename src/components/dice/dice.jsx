import { useEffect, useState } from "react";
import diceEmpty from "../../assets/images/dice-empty.png";
import dice1 from "../../assets/images/dice1.png";
import dice2 from "../../assets/images/dice2.png";
import dice3 from "../../assets/images/dice3.png";
import dice4 from "../../assets/images/dice4.png";
import dice5 from "../../assets/images/dice5.png";
import dice6 from "../../assets/images/dice6.png";

function Dice({ className = "", duration=1000}) {
  const [currentImage, setCurrentImage] = useState(dice3);
  const [isRolling, setIsRolling] = useState(false);
  const listImages = [dice1, dice2, dice3, dice4, dice5, dice6];
  useEffect(() => {
    if (isRolling) {
        const timeout = setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * 6);
            setCurrentImage(listImages[randomNumber]);
            setIsRolling(false);
        }, duration);
        return () => clearTimeout(timeout);
    }
}, [isRolling, duration, listImages]);

const handleClick = () => {
    if (!isRolling) {
        setCurrentImage(diceEmpty);
        setIsRolling(true);
    }
};
  return (
    <img
      src={currentImage}
      className=" rounded  {className} max-width:25% height: auto"
      style={{ width: "150px", height: "150px" }}
      alt=""
      onClick={handleClick}
    />
  );
}
export default Dice;
