import { useState } from "react";

function DiscoButton() {
  const [likes, setLikes] = useState(0); // Initialize state
  const discoColours = ["purple", "blue", "green", "yellow", "orange", "red"];
  const [colour, setColour] = useState(Math.floor(Math.random() * discoColours.length));

  const handleClick = () => {
    setLikes(likes + 1); // Update state on click
    setColour(discoColours[Math.floor(Math.random() * discoColours.length)]);
    
  };

  return (
    <button className="discobutton" onClick={handleClick} style={{ backgroundColor: colour }}>{likes} Likes
    </button>
  );
}

export default DiscoButton;