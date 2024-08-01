import { useState } from "react";

function LikeButton() {
  const [likes, setLikesCount] = useState(0);

  const changeLikesCount = (num) => {
    const newLikesCount = likes + num;
    if (newLikesCount < 0) return;
    setLikesCount(newLikesCount);
  };

  return (
    <>
      <button onClick={() => changeLikesCount(+1)}>{likes} Likes</button>
    </>
  );
}

export default LikeButton;
