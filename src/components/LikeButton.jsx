import React, { useState } from "react";
export const LikeButton = () => {
  let [likes, setLikes] = useState(0);

  const Click = () => {
    setLikes(likes + 1);
  };

  return <button onClick={Click}>{likes}Likes</button>;
};
export default LikeButton;
