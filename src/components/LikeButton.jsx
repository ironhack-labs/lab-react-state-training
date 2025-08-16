import { useState } from "react";

function LikeButton() {
const [likesNumber, setLikesNumber] = useState(0)


  const handleClick = () => {
    setLikesNumber(likesNumber+1)
  };

  return (
    
    <div className="btn-like">
      <button onClick={handleClick}>{likesNumber}  Likes</button>
    </div>
  );
}

export default LikeButton;
