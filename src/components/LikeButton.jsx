import { useState } from "react";

function LikeButton() {
  const [like, setLike] = useState(0);

  const handleLike = () => {
    setLike((prev) => prev + 1);
  };

  return <button onClick={handleLike}>{like} likes</button>;
}

export default LikeButton;
