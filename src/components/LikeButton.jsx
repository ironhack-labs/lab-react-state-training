// src/components/LikeButton.jsx

import React, { useState } from "react";
import "./LikeButton.css"; // Import the CSS file for styling

const LikeButton = () => {
  const [likes, setLikes] = useState(0); // State to track the number of likes

  const handleClick = () => {
    setLikes(likes + 1); // Increment the likes count
  };

  return (
    <button className="like-button" onClick={handleClick}>
      {likes} {likes === 1 ? "Like" : "Likes"} {/* Display the correct text */}
    </button>
  );
};

export default LikeButton;
