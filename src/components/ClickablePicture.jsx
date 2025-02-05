import React, { useState } from "react";
import img from "../assets/images/maxence-glasses.png";
import img2 from "../assets/images/maxence.png";

const ClickablePicture = () => {
    const [firstImage, setIsFirstImage] = useState(true);

    const toggleImage = () => {
        setIsFirstImage((prev) => !prev);
    };

    return (
        <div>
            <img
                onClick={toggleImage}
                src={firstImage ? img : img2} 
                alt="clickable"
                className="img"
                style={{ cursor: "pointer", width: "300px" }}
            />
        </div>
    );
};

export default ClickablePicture;

