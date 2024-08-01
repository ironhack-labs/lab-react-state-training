import { useState } from "react";

function LikeButton() {
  const [likes, setLikeCount] = useState(0);

  const changeLikeCount = (int) => {
    const newLikeCount = likes + int;

    setLikeCount(newLikeCount);
  };

  return (
    <>
      <div>
        <button onClick={() => changeLikeCount(1)}>{likes}Likes</button>
      </div>
    </>
  );
}

export default LikeButton;
