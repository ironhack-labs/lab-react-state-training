import { useState } from "react";

function LikeButton() {
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    setCounter(counter + 1);
  };
  return (
    <button onClick={increaseCounter}>
      {counter} {counter === 1 ? "Like" : "Likes"}
    </button>
  );
}
export default LikeButton;
