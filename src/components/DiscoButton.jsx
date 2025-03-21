import { useState } from "react";

import LikeButton from "./LikeButton";

function DiscoButton() {
  const colors = ["purple", "blue", "green", "yellow", "orange", "red"];

  const [currentIndex, setCurrentIndex] = useState(0);

  const toggleColors = () => {
    const nextIndex = (currentIndex + 1) % colors.length;
    setCurrentIndex(nextIndex);
  };

  return (
    <>
      <LikeButton
        onClick={toggleColors}
        style={{ backgroundColor: colors[currentIndex] }}
      />
    </>
  );
}

export default DiscoButton;
