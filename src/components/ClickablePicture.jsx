import { useState } from "react";
import maxence from '../assets/images/maxence.png';
import maxenceGlasses from '../assets/images/maxence-glasses.png';

export default function ClickablePicture () {
    
    const [image, setImage] = useState(maxence);

    const imageChange = () => {
        setImage(maxenceGlasses);
    }

    return (
        <div>
            <img src={image} onClick={imageChange} />
        </div>
    )
};