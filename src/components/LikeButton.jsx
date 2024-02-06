import { useState } from "react";

export default function LikeButton() {
  const [countLikes, setCountLikes] = useState(0);

  return (
    <button
      onClick={() => {
        setCountLikes(countLikes + 1);
      }}
    >
      {countLikes} Likes
    </button>
  );
}
