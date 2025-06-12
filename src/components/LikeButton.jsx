import { useState } from "react";

function LikeButton() {
  const [likes1, setLikes1] = useState(0);
  const [likes2, setLikes2] = useState(0);

  return (
    <div>
      <button onClick={() => setLikes1(likes1 + 1)}>Likes {likes1}</button>
      <button onClick={() => setLikes2(likes2 - 1)}>Likes {likes2}</button>
    </div>
  );
}

export default LikeButton;
