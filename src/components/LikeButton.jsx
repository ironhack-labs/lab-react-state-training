import { useState } from "react";

export const LikeButton = () => {
  const [likes, setLikes] = useState(0);

  const increaseLikes = () => setLikes(likes + 1);

  return (
    <div>
      <button onClick={increaseLikes}>Your Likes: {likes}</button>
    </div>
  );
};
