
import Maxence from "../assets/images/maxence.png"
import MaxenceGlaces from "../assets/images/maxence-glasses.png"
import { useState } from "react";

function ClickablePicture() {
    const [glassesOn,setGlassesOn] = useState(false);

const OnOff = () => {
    setGlassesOn(!glassesOn)
}


    return (
        <div>
        <img onClick={() => OnOff()} src={glassesOn ? MaxenceGlaces : Maxence} />
        </div>
    )

}

export default ClickablePicture