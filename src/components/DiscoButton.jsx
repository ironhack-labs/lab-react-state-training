import { useState } from "react";

function DiscoButton() {
  const colors = ["purple", "blue", "green", "yellow", "orange", "red"];
  const [countLike, setLike] = useState(0);
  const [colorIndex, setColorIndex] = useState(-1);

  return (
    <div className="button">
      <button
        style={{
          backgroundColor: colorIndex >= 0 ? colors[colorIndex] : "transparent",
        }} // Apply the color directly from the colors array
        onClick={() => {
          setLike(countLike + 1);
          setColorIndex((prevIndex) => (prevIndex + 1) % colors.length); // Increment colorIndex, loop back to 0 at end
        }}
      >
        <p>{countLike} Likes</p>
      </button>
    </div>
  );
}

export default DiscoButton;
