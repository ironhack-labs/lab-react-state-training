import React, { useState } from "react";

// Define a functional component named ClickablePicture
const ClickablePicture = () => {
  // State to track the click status, initialized to false (glasses not visible)
  const [click, setClick] = useState(false);

  // Event handler for the picture click
  const handlePictureClick = () => {
    console.log("Image clicked");
    // Toggle the click status on each click
    setClick(!click);
  };

  // Render JSX with the clickable picture
  return (
    <div>
      {/* Image with an onClick event that triggers the handlePictureClick function */}
      <img
        src={
          click
            ? "src/assets/images/maxence-glasses.png"
            : "src/assets/images/maxence.png"
        }
        alt={click ? "Dude with glasses" : "Dude without glasses"}
        onClick={handlePictureClick}
      />
    </div>
  );
};

// Export the ClickablePicture component as the default export
export default ClickablePicture;
