// src/components/ClickablePicture.jsx

import React, { useState } from "react";

const ClickablePicture = ({ img1, img2 }) => {
  const [image, setImage] = useState(img1); // Set the initial image to img1

  const handleClick = () => {
    // Toggle between img1 and img2 on click
    setImage(image === img1 ? img2 : img1);
  };

  return (
    <img
      src={image}
      alt="Clickable"
      onClick={handleClick}
      style={{ cursor: "pointer", width: "150px", height: "150px" }} // Style the image
    />
  );
};

export default ClickablePicture;
