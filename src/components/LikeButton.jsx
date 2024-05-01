import { useState } from "react";
function LikeButton() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="LikeButton">
      <button onClick={() => setCounter((currentCount) => currentCount + 1)}>
        {counter} Likes
      </button>
    </div>
  );
}
export default LikeButton;
