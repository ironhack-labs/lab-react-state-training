import React, {useState} from "react";
import maxenceImage from "../assets/images/maxence.png"
import maxenceGlasses from "../assets/images/maxence-glasses.png"

export default function ClickablePicture() {
    const [image, setImage] = useState(maxenceImage);

    const imageToggle = () => setImage((prevImage) => (prevImage === maxenceImage ? maxenceGlasses : maxenceImage))
 
    return (
        <>
        <img src={image} onClick={imageToggle} alt="Maxence" />
        </>
    )
}