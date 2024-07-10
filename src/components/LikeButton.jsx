import { useState } from "react";

function LikeButton() {
  const [moreLikes, setMoreLikes] = useState(0);
  const handleMoreLikes = () => {
    console.log("1 like");
    setMoreLikes(moreLikes + 1);
  };
  return (
    <div>
      <button onClick={handleMoreLikes}>{moreLikes} Likes</button>
    </div>
  );
}

export default LikeButton;
