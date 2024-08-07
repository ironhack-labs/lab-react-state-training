import { useState } from "react";

export default function LikeButton() {
  const [counter, setCounter] = useState(0);
  const likes = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      <button onClick={likes}>{counter} likes</button>
    </div>
  );
}
