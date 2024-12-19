import { useState } from "react";



function ClickablePicture() {
  const [clicked, setClicked] = useState(false); // Initialize state

  const handleClick = () => {
    setClicked(!clicked); // Toggle the state on click
  };

  return (
    <img
      className="clickablepicture"
      onClick={handleClick}
      src={clicked ? "src/assets/images/maxence-glasses.png" : "src/assets/images/maxence.png"} // Toggle between two images
      alt="Clickable"
    />
  );
}

export default ClickablePicture;





