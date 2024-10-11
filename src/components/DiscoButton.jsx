import React, { useState } from 'react';

const colors = ["purple", "blue", "green", "yellow", "orange", "red"]; // Array of colors

const DiscoButton = () => {
  const [likes, setLikes] = useState(0); // State to track the number of likes
  const [colorIndex, setColorIndex] = useState(0); // State to track the color index

  const handleClick = () => {
    setLikes(likes + 1); // Increment the number of likes
    setColorIndex((colorIndex + 1) % colors.length); // Cycle through colors
  };

  return (
    <button
      onClick={handleClick} // Handle click event
      style={{ backgroundColor: colors[colorIndex], color: 'white', padding: '10px 20px', fontSize: '16px' }}
    >
      {likes} Likes
    </button>
  );
};

export default DiscoButton;
