import { useState } from "react";

export function ClickablePicture ({img1, img2}) {
    const [currImage, setCurrImage] = useState(img1);

    const handleClick = () => {
        setCurrImage(currImage === img1 ? img2 : img1);
    }
    return (
        <img 
            src={currImage} 
            alt="Clickable Image"
            onClick={handleClick}
            className="clickable-picture"
        />
    )
}