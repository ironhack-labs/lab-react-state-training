import { useState } from "react";

function LikeButton() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <div className="d-flex gap-3">
      <button className="p-1 rounded" onClick={() => setCount1(count1 + 1)}>
        {" "}
        {count1} {count1 === 1 ? "Like" : "Likes"}
      </button>

      <button className="p-1 rounded" onClick={() => setCount2(count2 + 1)}>
        {" "}
        {count2} {count2 === 1 ? "Like" : "Likes"}
      </button>
    </div>
  );
}

export default LikeButton;
