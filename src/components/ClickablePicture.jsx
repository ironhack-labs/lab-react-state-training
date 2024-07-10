import { useState } from "react";

function ClickablePicture() {
  const [picture, setPicture] = useState("src/assets/images/maxence.png");
  const handleClick = () => {
    setPicture(
      picture === "src/assets/images/maxence.png"
        ? "src/assets/images/maxence-glasses.png"
        : "src/assets/images/maxence.png"
    );
    console.log(handleClick);
  };
  return (
    <img
      className="clickable-picture"
      onClick={handleClick}
      src={`${picture}`}
      alt="Clickable Picture"
    />
  );
}

export default ClickablePicture;
