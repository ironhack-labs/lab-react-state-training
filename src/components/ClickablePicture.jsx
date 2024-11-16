import "./ClickablePicture.css"
import picture from "../assets/images/maxence.png"
import pictureWithGlasses from "../assets/images/maxence-glasses.png";
import { useState } from "react";

function ClickablePicture(){
    const [image, setImage] = useState (picture);

    function toggleImage(){

        if (image === picture){
            setImage(pictureWithGlasses);
        } else {
            setImage(picture);
        }
    }

    return (
      <div>
        <img onClick={() => toggleImage()} src={image} alt="young man" />
      </div>
    );
}

export default ClickablePicture;