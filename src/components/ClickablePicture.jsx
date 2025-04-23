import { useState } from "react";
import ImageOne from "./../assets/images/maxence.png"
import ImageTwo from "./../assets/images/maxence-glasses.png"

function ClickablePicture (){
    const [image, setImage] = useState(ImageOne)

    const changeImage = () => {
        if (image === ImageOne){
            setImage(ImageTwo);
        } else {
            setImage(ImageOne);
        }
    }
    
    return (
        <div>
            <img src={image} onClick={changeImage}/>
        </div>
    )
}

export default ClickablePicture;