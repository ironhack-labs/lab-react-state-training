import { useState } from "react";
import LikeButton from "../like-button/like-button";

function DiscoButton({ className = "" }) {
  const [currentColor, setColor] = useState(0);
  const colors = ["purple", "blue", "green", "yellow", "orange", "red"];

  const handleColor = () => {
    let nextColorIndex = currentColor + 1;
    if (nextColorIndex === colors.length) {
      nextColorIndex = 0;
    }
    setColor(nextColorIndex);
  };

  const buttonStyle = {
    backgroundColor: colors[currentColor],
  };

  return (
    <LikeButton
      className={className}
      onClick={handleColor}
      style={buttonStyle}
    />
  );
}

export default DiscoButton;
