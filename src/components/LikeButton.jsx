import { useState } from "react";

function LikeButton() {
  let [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <header>
      <button onClick={increaseCounter}>{counter} Likes </button>
    </header>
  );
}

export default LikeButton;
