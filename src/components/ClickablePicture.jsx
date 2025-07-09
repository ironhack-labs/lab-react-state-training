import { useState } from "react";
import imgNormal from "../assets/images/maxence.png";
import imgWithGlasses from "../assets/images/maxence-glasses.png";

function ClickablePicture() {
    const [picture, setPicture] = useState(imgNormal);

    const ChangePicture = () => {
        setPicture((currentImg) => {
            if (currentImg === imgNormal) {
                return imgWithGlasses;
            } else {
                return imgNormal
            }
        });

    };
    return (
        <div>
            <img onClick={ChangePicture} src={picture} alt="selfie" />
        </div>

    )
}

export default ClickablePicture;