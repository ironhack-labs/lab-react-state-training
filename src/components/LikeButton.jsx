import { useState } from "react";
export  function LikeButton() {
  const [likes, setLikes] = useState(0);
  return <button onClick={() => setLikes(likes + 1)}>{likes}Like</button>;
}
export default LikeButton
