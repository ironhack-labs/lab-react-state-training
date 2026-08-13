import { useState } from "react";

const Dice = () => {
  const emptyImg = "src/assets/images/dice-empty.png";
  const [diceImg, setDiceImg] = useState(emptyImg);

  const handleDiceClick = () => {
    setDiceImg(emptyImg);
    setTimeout(() => {
      setDiceImg(getImageSrc);
    }, 1000);
  };

  const getImageSrc = () => {
    const img = Math.floor(Math.random() * 6);
    return `src/assets/images/dice${img}.png`;
  };

  return (
    <div>
      <img src={diceImg} onClick={handleDiceClick} />
    </div>
  );
};

export default Dice;
