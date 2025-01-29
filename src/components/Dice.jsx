// ./src/components/ClickablePicture.jsx
import React, { useState, useEffect } from "react";
import image1 from "../assets/images/dice-empty.png";
import image2 from "../assets/images/dice1.png";
import image3 from "../assets/images/dice2.png";
import image4 from "../assets/images/dice3.png";
import image5 from "../assets/images/dice4.png";
import image6 from "../assets/images/dice5.png";
import image7 from "../assets/images/dice6.png";

function ClickableDice() {
  const images = [image1, image2, image3, image4, image5, image6, image7];

  const [currentImage, setCurrentImage] = useState(images[0]);

  const handleClick = () => {
    const randomImage = images[Math.floor(Math.random() * images.length)];
    setCurrentImage(randomImage);
  };

  return (
    <div>
      <img
        src={currentImage}
        alt="Random Dice"
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
}

export default ClickableDice;
