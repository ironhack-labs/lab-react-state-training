import { useState } from "react";

const DiscoButton = () => {
  const colors = ["purple", "blue", "green", "yellow", "orange", "red"];
  const [colorIndex, setColorIndex] = useState(0);
  const [likeCount, setLikeCount] = useState(0);
  const likeCountAndColorHandler = () => {
    setLikeCount(likeCount + 1);
    setColorIndex((colorIndex + 1) % colors.length);
  };
  return (
    <button
      type="button"
      onClick={likeCountAndColorHandler}
      style={{ backgroundColor: colors[colorIndex] }}
    >
      {likeCount} Likes
    </button>
  );
};

export default DiscoButton;
