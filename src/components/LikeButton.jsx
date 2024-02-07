import { useState } from "react";

function LikeButton() {
  const [likes, setLikes] = useState(0);
  const [like, setLike] = useState(0);
  return (
    <>
      <button onClick={() => (likes >= 5 ? null : setLikes(likes + 1))}>
        {" "}
        {likes} 👍🏽 Likes{" "}
      </button>
      <button onClick={() => (like >= 10 ? null : setLike(like + 1))}>
        {" "}
        {like} 😄 Likes{" "}
      </button>
    </>
  );
}

export default LikeButton;


