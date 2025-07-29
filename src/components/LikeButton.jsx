import { useState } from "react";

function LikeButton() {
  const [likes, setLikes] = useState(0);
  const increaseLike = () => {
    setLikes(likes + 1);
  };
  return (
    <>
      <div>
        <button onClick={() => increaseLike()}>{likes} Likes</button>
      </div>
    </>
  );
}

export default LikeButton;
