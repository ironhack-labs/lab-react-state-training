import { useState } from "react";

function Dice() {
  const [photoId, setPhotoId] = useState("dice1");

  function handleDiceRoll() {
    const roll = Math.floor(Math.random() * 6) + 1; // 1–6
    setPhotoId(`dice${roll}`);
  }

  return (
    <>
      <div id={photoId} onClick={handleDiceRoll}></div>
    </>
  );
}

export default Dice;
