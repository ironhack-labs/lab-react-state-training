// ### Iteration 3 | State: `ClickablePicture`

// Create a `ClickablePicture` component that displays a
// picture. On each click, the picture should toggle between
// the two images. You can find the images in the `assets/` folder.

import React, { useState } from "react";
import "../css/ClickablePicture.css";
// import image1 from "../assets/images/maxence-glasses.png";
// import image2 from "../assets/images/maxence.png";

const ClickablePicture = () => {
  const [image, setImage] = useState("src/assets/images/maxence-glasses.png"); // initial image

  const handleClick = () => {
    setImage(
      image === "src/assets/images/maxence-glasses.png"
        ? "src/assets/images/maxence.png"
        : "src/assets/images/maxence-glasses.png"
    );
  };

  return (
    <img
      className="clickable-picture"
      src={`${image}`}
      alt="Clickable Picture"
      onClick={handleClick}
    />
  );
};

export default ClickablePicture;
