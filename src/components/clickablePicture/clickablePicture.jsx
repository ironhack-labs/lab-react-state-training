import withoutGlasses from "../../assets/images/maxence.png"
import withGlasses from "../../assets/images/maxence-glasses.png"
import { useState } from "react";

function ClickablePicture() {
    const [currentImage, setCurrentImage] = useState(withoutGlasses);  

    const toggleImage = () => {
        if (currentImage === withoutGlasses) {
            setCurrentImage(withGlasses);
        } else {
            setCurrentImage(withoutGlasses);
        }
    }

    return (
        <img src={currentImage} alt="Maxence Image" onClick={toggleImage} style={{ width: "300px", height:"300px" }} />
    );
}

export default ClickablePicture;