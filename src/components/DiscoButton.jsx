import { useState } from "react";

function DiscoButton() {
  const [count, setCount] = useState(0);
  const [currentColor, setCurrentColor] = useState(0); 
  const colors = ["purple", "blue", "green", "yellow", "orange", "red"];

  const handleButtonClick = () => {
    setCount((prevCount) => prevCount + 1);
    const randomIndex = Math.floor(Math.random() * colors.length); // Generate a new random index
    setCurrentColor(randomIndex); // Set the currentColor to the new random index
  };

  const buttonStyle = {
    backgroundColor: colors[currentColor], // Use the currentColor index to select the background color
  };

  return (
    <div className="likeButton">
      <button onClick={handleButtonClick} style={buttonStyle}>
        {count} likes
      </button>
    </div>
  );
}

export default DiscoButton;
