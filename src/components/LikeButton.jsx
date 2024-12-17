import { useState } from "react";

function LikeButton() {
  const [counter, setCounter] = useState(0);
  const incrementValue = () => setCounter(counter + 1);

  return <button onClick={incrementValue}>{counter} Likes</button>;
}

export default LikeButton;
