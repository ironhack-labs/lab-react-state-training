import { useState } from "react";

function LikeButton() {

  let [contador, setContador] = useState(0) 

  const handleIncrease = () => {
    setContador(contador + 1)
  }

  return (
      <div className="buttons">
        <button onClick={handleIncrease}>{contador} Likes</button>
        {/* <button onClick={handleDecrease}>{contador} Likes</button> */}
      </div>
  );
}

export default LikeButton;
