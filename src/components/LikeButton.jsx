import React from "react";
import { useState } from "react";

function LikeButton() {
  const [contador, setContador] = useState(0);

  const handleIncrease = () => {
    setContador(contador + 1);
  };
  return <button id ="likes" onClick={handleIncrease}> {`${contador}Likes`}</button>;
}

export default LikeButton;
