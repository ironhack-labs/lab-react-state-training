import { useState } from "react";

function DiscoButton() {
  const [discobtn, setdiscobtn] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);

  const colors = ["purple", "blue", "green", "yellow", "orange", "red"];

  const handleClick = () => {
    setdiscobtn(discobtn + 1);
    setColorIndex((colorIndex + 1) % colors.length);
  };

  return (
    <button
      onClick={handleClick}
      style={{
        backgroundColor: colors[colorIndex],
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "8px",
      }}
    >
      {discobtn} Likes
    </button>
  );
}

export default DiscoButton;
