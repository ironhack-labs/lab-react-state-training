import { useState } from 'react';
import image1 from "../assets/images/maxence.png"
import image2 from "../assets/images/maxence-glasses.png"

function ClickablePicture() {
    const [image, changeImage] = useState(image1);

    const setImage = () => {
    image === image1 ? changeImage(image2) : changeImage(image1)
    }
    
    return (
        <img onClick={setImage} src={image}></img>
    );


}

export default ClickablePicture