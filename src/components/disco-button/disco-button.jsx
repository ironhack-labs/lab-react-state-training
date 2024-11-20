import React, { useState } from 'react';

function DiscoButton() {
  // State to keep track of likes and the current background color
  const [likes, setLikes] = useState(0); // likes: Tracks the number of likes, initially set to 0.
  const [colorIndex, setColorIndex] = useState(0); // colorIndex: Tracks the index of the current background color in the colors array, initially set to 0.

  // Array of colors for the background
  const colors = ["purple", "blue", "green", "yellow", "orange", "red"]; // The colors array contains the possible background colors for the button

  // Function to handle the button click
  const handleClick = () => {
    // Increase the number of likes
    setLikes(likes + 1);

    // Change the background color to the next color in the array
    setColorIndex((colorIndex + 1) % colors.length); // The colorIndex is updated to the next index in the colors array. The % colors.length ensures that when the last color is reached, it loops back to the first color.
  };

  return (
    <button
      onClick={handleClick} 
      style={{
        backgroundColor: colors[colorIndex], //// The button's background color is dynamically set based on the current colorIndex.
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        fontSize: '16px',
        cursor: 'pointer',
      }}
    >
      {likes} Likes
    </button>
  );
}

export default DiscoButton;
