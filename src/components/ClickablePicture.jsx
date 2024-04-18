import React, { useState } from "react";

function ClickablePicture() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <img
      src={isClicked ? "/assets/maxence.png" : "/assets/maxence-glasses.png"}
      alt="Clickable Picture"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    />
  );
}

export default ClickablePicture;
