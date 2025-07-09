import { useState } from "react";

function LikeButton() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          setCounter1(counter1 + 1);
        }}
      >
        {counter1} likes
      </button>
      <button
        onClick={() => {
          setCounter2(counter2 + 1);
        }}
      >
        {counter2} likes
      </button>
    </div>
  );
}

export default LikeButton;
