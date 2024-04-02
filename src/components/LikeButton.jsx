import { useState } from "react";

function LikeButton() {
  const [countLike, setLike] = useState(0);

  console.log(countLike);

  return (
    <div className="button">
      <button
        onClick={() => {
          setLike(countLike + 1);
        }}
      >
        <p>{countLike} Likes</p>
      </button>
    </div>
  );
}

export default LikeButton;
