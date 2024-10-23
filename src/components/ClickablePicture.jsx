import { useState } from "react";
import maxence from "../assets/images/maxence.png";
import maxenceGlasses from "../assets/images/maxence-glasses.png"

function ClickablePicture() {
    const [picture, setPicture] = useState(maxence);
    const updateImage = () => {
        if (picture === maxence) {
            setPicture(maxenceGlasses);
        } else {
            setPicture(maxence);
        }
    };

    return (
        <div>
            <img src={picture} onClick={updateImage} />
            {/* <img src={picture} onClick={() => setPicture(picture === maxence ? maxenceGlasses : maxence )}/> */}
        </div>
    )
}

export default ClickablePicture;