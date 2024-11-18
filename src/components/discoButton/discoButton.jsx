import { useState } from "react";
import LikeButton from "../like-button/likeButton";
function DiscoButton({ className = "" }) {
  const [currentIndex, setIndex] = useState(0);
  const colors = ["purple", "blue", "green", "yellow", "orange", "red"];

  const handleClickColor = () => {
    if (currentIndex >= 0) {
      setIndex((currentIndex + 1) % colors.length);
    }
  };
  return (
    <LikeButton
      max={10}
      onClick={handleClickColor}
      style={{ backgroundColor: colors[currentIndex] }}
      className={className}
    />
  );
}
export default DiscoButton;


