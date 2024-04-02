import { useState } from "react";

const DiscoButton = () => {
  const [likes, setLikes] = useState(0);
  const colors = ["purple", "blue", "green", "yellow", "orange", "red"];
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  return (
    <button
      style={{ backgroundColor: colors[currentColorIndex] }}
      onClick={() => {
        setLikes(likes + 1);
        setCurrentColorIndex((currentColorIndex + 1) % colors.length);
      }}
    >
      Likes: {likes}
    </button>
  );
};

export default DiscoButton;
