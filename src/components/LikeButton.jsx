import { useState } from "react";

function LikeButton() {
  const [countValue, setCountValue] = useState(0);

  const handleLikeButton = () => {
    setCountValue(countValue + 1);
  };

  return <button onClick={handleLikeButton}>{countValue} Likes</button>;
}

export default LikeButton;
