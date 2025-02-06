import { useState } from "react";

export default function LikeButton() {
  const [likes, setLikes] = useState(0);
  // const [dislikes, setDislikes] = useState(0);

  const goLike = () => {
	setLikes(likes + 1);
  };

  //   const GoDislike = () => {
  // 	setDislikes(dislikes + 1);
  //   };

  return <button onClick={goLike}>{likes} likes</button>;
}
