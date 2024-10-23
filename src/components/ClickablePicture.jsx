import { useState } from "react";

const ClickablePicture = () => {

    const picOne = "./assets/maxence.png";
    const picTwo = "./assets/maxence-glasses.png";
    
    const [showPicture, setShowPicture] = useState(picOne); // Initialize with picOne

    const displayOtherImage = () => {
        setShowPicture(showPicture === picOne ? picTwo : picOne); // Toggle between the images
    };

    return (
        <div>
            <img onClick={displayOtherImage} src={showPicture} alt="Clickable" />
        </div>
    );
}

export default ClickablePicture;
