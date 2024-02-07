import React, { useState } from "react";
import image1 from "../assets/images/maxence-glasses.png";
import image2 from "../assets/images/maxence.png";

function ClickablePicture() {
    const [currentImage, setCurrentImage] = useState(image1);

    const toggleImage = () => {
        setCurrentImage(currentImage === image1 ? image2 : image1);
    };

    return (
        <img src={currentImage} alt="Clickable Picture" onClick={toggleImage} />
    );
}

export default ClickablePicture;