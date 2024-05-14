import { useState } from "react";
import Max from "../assets/images/maxence.png";
import MaxGlasses from "../assets/images/maxence-glasses.png";

function ClickablePicture () {
    const [ photo, setPhoto ] = useState(false)
    return (
       <img src={ !photo ? Max : MaxGlasses}onClick = {
            () => setPhoto(!photo)
        }/>
    )
}

export default ClickablePicture;