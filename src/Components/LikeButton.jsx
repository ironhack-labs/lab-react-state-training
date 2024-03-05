import React, { useState } from "react";

// Define a functional component named LikeButton
const LikeButton = () => {
  // State to track the number of likes, initialized to 0
  const [likes, setLikes] = useState(0);

  // Event handler for the button click
  const handleButtonClick = () => {
    // Update the state to increase the number of likes by 1
    setLikes(likes + 1);
  };

  // Render JSX with the button and the current number of likes
  return (
    <div>
      {/* Button with an onClick event that triggers the handleButtonClick function */}
      <button onClick={handleButtonClick}>Like</button>
      
      {/* Paragraph element displaying the current number of likes */}
      <p>{`${likes} Likes`}</p>
    </div>
  );
};

// Export the LikeButton component as the default export
export default LikeButton;
