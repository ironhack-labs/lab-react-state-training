import React, { useState } from "react";

export default function ClickablePicture() {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <img
      onClick={handleClick}
      src={
        isClicked
          ? "../public/assets/images/maxence-glasses.png"
          : "../public/assets/images/maxence.png"
      }
      alt="clickable"
    />
  );
}
