import React, { useState, useEffect } from "react";

// Define a functional component named Dice
const Dice = () => {
  // State to track the click status, initialized to false
  const [click, setClick] = useState(false);

  // State to track the dice value
  const [diceValue, setDiceValue] = useState(1);

  // Event handler for the picture click
  const handlePictureClick = () => {
    console.log("Image clicked");
    // Toggle the click status on each click
    setClick(true);
  };

  useEffect(() => {
    // After 1 second, change the dice value to a random number
    const timer = setTimeout(() => {
      setDiceValue(Math.floor(Math.random() * 6) + 1);
      // Set the click status to false to show the new dice value
      setClick(false);
    }, 1000);

    // Clean up the timer to avoid memory leaks
    return () => clearTimeout(timer);
  }, [click]);

  // Render JSX with the clickable picture
  return (
    <div>
      {/* Image with an onClick event that triggers the handlePictureClick function */}
      <img
        src={
          click
            ? "src/assets/images/dice-empty.png"
            : `src/assets/images/dice${diceValue}.png`
        }
        alt={click ? "Roll the Dice" : "Dice Rolled"}
        onClick={handlePictureClick}
      />
    </div>
  );
};

// Export the Dice component as the default export
export default Dice;
