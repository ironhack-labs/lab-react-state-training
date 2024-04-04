import { useState } from "react";
import "./LikeButton.css"; // You might want to rename this CSS file since it's used for DiscoButton now

const colors = ["purple", "blue", "green", "yellow", "orange", "red"];

function DiscoButton() {
  const [likes, setLikes] = useState(0);
  const [color, setColor] = useState(colors[0]); // Start with the first color in the array

  const handleClick = () => {
    setLikes(likes + 1);
    // Pick a random color from the colors array
    const randomIndex = Math.floor(Math.random() * colors.length);
    setColor(colors[randomIndex]);
  };

  // Apply the current color as the button's background color
  const buttonStyle = {
    backgroundColor: color,
  };

  return ( // interresting, style={buttonStyle} updates if only the color update :D
    <button type="button" className="like-button" onClick={handleClick} style={buttonStyle} > 
      {likes} Likes
    </button>
  );
}

export default DiscoButton;
