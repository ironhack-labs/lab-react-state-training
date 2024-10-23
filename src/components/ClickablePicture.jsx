import { useState } from "react";
import image1 from "../assets/images/maxence.png";
import image2 from "../assets/images/maxence-glasses.png";

function ClickablePicture () {
    const imageToDisplay = [image1, image2];              
    const [image, setImage] = useState(imageToDisplay[0]);


    const toggleImage = () => {
        if (image === imageToDisplay[0]) {
            setImage(imageToDisplay[1]);
        } else {
            setImage(imageToDisplay[0]);
        }
    }

    
    return (
        <div>
            <img onClick={toggleImage} src={image} />
        </div>
    )
}

export default ClickablePicture;