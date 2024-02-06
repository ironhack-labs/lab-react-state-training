import { useState } from "react";
import maxence from '../assets/images/maxence.png'
import maxenceGlasses from '../assets/images/maxence-glasses.png'

function ClickablePicture() {
    const [picture, setPicture] = useState(maxence);

    const switchPicture = () => {
        if(picture === maxence) {
            setPicture(maxenceGlasses);
        } else {
            setPicture(maxence)
        }
    }

    return (
        <div>
            <img className="picture" src={picture} alt="picture of a man" onClick={switchPicture} />
        </div>
    )

}

export default ClickablePicture;