import { useState } from "react";
import img1 from "../assets/images/maxence.png";
import img2 from "../assets/images/maxence-glasses.png";



function ClickablePicture() {

    const [currentImage, setCurrentImage] = useState(img1);
    const toggleImage = () => {
        setCurrentImage(currentImage === img1 ? img2 : img1);
    };

    return (
        <div>
            <img src={currentImage} alt="Clickable Image" onClick={toggleImage} />

        </div>
    )

}

export default ClickablePicture;