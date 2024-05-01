import { useState } from "react";
import imgNoGlasses from "../assets/images/maxence.png"
import imgGlasses from "../assets/images/maxence-glasses.png"




function ChangeImage() {

const [image, setimage] = useState(imgNoGlasses);

    const toggleImage = () => {
        if ( image === imgNoGlasses){
            return setimage(imgGlasses)
        }
        else{
            return setimage (imgNoGlasses)
        }
    }



    return (
        <>
        <div>
            <h2>ClickablePicture</h2>
            <img onClick={toggleImage} src={image} alt="" />
        </div>
        </>

    );
  }

export default ChangeImage