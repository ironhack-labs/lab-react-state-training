import { useState } from "react";

function LikeButton() {
  const [likes, setLikes] = useState(0);

  return (
    <button onClick={() => setLikes(likes + 1)} style={{ padding: "10px 20px", fontSize: "16px" }}>
      {likes} Likes
    </button>
  );
}

export default LikeButton;




