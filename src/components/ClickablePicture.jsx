import maxence from "../assets/images/maxence.png";
import maxenceGlassed from "../assets/images/maxence-glasses.png";
import { useState } from "react";

function ClickablePicture() {

    const [imgChange, setImgChange] = useState(maxence)

    const handleClick = () => {
        if(imgChange === maxence) {
            setImgChange(maxenceGlassed);
        } else if (imgChange === maxenceGlassed) {
            setImgChange(maxence);
        }
    }

    return(
        <div>
            <img className="maxence-img" src={imgChange} onClick={() => handleClick()} />
        </div>
    )
}

export default ClickablePicture;