import { useState} from "react";
import firstImage from "../assets/images/firstImage.png"
import secondImage from "../assets/images/secondImage.png"

function ClickablePicture(){
    const [image, setImage] = useState(firstImage);

    const changeImage = () => {
     if(image === firstImage){
         setImage(secondImage);
     }
     return setImage(firstImage)
    }
     
     return (
        <img src= {image} onClick={changeImage} />
     )

}

export default ClickablePicture;