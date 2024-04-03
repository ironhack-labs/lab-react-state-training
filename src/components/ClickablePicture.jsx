import { useState } from "react";
import maxenceGlasses from "../assets/images/maxence-glasses.png";
import maxenceImage from "../assets/images/maxence.png";

const ClickablePicture = () => {
    const [imgSrc, setImgSrc] = useState(maxenceImage);

    const handleClick = () => {
        setImgSrc(imgSrc === maxenceGlasses ? maxenceImage : maxenceGlasses);
    };

    return ( 
        <img src={imgSrc} alt="person image" onClick={handleClick}/>
    );
}
 
export default ClickablePicture;
