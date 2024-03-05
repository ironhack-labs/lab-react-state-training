import { useState } from "react";

export const LikeButton = () => {
  const colorArray = ["purple", "blue", "green", "yellow", "orange", "red"];

  const [likes, setLikes] = useState(0);
  const increaseLikes = () => setLikes(likes + 1);

  return (
    <div>
      <button
        onClick={increaseLikes}
        style={{ backgroundColor: colorArray[likes % colorArray.length] }}
      >
        Your Likes: {likes}
      </button>
    </div>
  );
};
