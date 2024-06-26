import { useState } from "react"
import maxence from "../assets/images/maxence.png"
import maxenceGlasses from "../assets/images/maxence-glasses.png"

const ClickablePicture = () => {

    const [picture, setPicture] = useState(maxence);

    const handleClick = () => {
        setPicture((currentPicture) =>
            currentPicture === maxence ? 
            maxenceGlasses : maxence
        );
    };

    return (
        <div className="img-div">
            <img src={picture} onClick={handleClick}/>
        </div>
    )
}

export default ClickablePicture