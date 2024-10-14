// src/components/DiscoButton.jsx

import React, { useState } from "react";
import "./DiscoButton.css"; // Import the CSS file for styling

const DiscoButton = () => {
  const [likes, setLikes] = useState(0); // State to track the number of likes
  const [colorIndex, setColorIndex] = useState(0); // State to track the current color index
  const colors = ["purple", "blue", "green", "yellow", "orange", "red"]; // Array of colors

  const handleClick = () => {
    setLikes(likes + 1); // Increment the likes count
    setColorIndex((colorIndex + 1) % colors.length); // Change color index, looping back to 0
  };

  return (
    <button
      className="disco-button"
      onClick={handleClick}
      style={{ backgroundColor: colors[colorIndex] }} // Change button background color
    >
      {likes} {likes === 1 ? "Like" : "Likes"} {/* Display the correct text */}
    </button>
  );
};

export default DiscoButton;
