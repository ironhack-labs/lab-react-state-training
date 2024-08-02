import React, { useState } from "react";
import image1 from "../assets/images/maxence.png"
import image2 from "../assets/images/maxence-glasses.png"

function ClickablePicture() {
    const [firstImage, setFirstImage] = useState(true);

    const handleClick = () => {
        setFirstImage(!firstImage);
    };

    return (
        <img
            src={firstImage ? image1 : image2}
            alt="Toggleable"
            onClick={handleClick}
            style={{cursor: "pointer"}}
            />
    )
}


export default ClickablePicture;