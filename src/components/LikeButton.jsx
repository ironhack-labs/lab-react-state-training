import "./LikeButton.css";
import { useState } from "react";

export const LikeButton = () => {
  const [likesState, setLikesState] = useState(0);

  const incrementLikeCounter = () => {
    setLikesState(likesState + 1);
  };

  return <button onClick={incrementLikeCounter}>{likesState} Likes</button>;
};