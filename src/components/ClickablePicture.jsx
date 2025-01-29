// ./src/components/ClickablePicture.jsx
import React, { useState } from "react";
import image1 from "../assets/images/maxence.png"; 
import image2 from "../assets/images/maxence-glasses.png";

function ClickablePicture() {
  const [isClicked, setIsClicked] = useState(false);


  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div>
      <img
        src={isClicked ? image2 : image1}
        alt="Toggle Image"
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
}

export default ClickablePicture;
