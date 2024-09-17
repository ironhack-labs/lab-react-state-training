import { useState } from "react";
import maxGlasses from "../assets/images/maxence-glasses.png";
import maxNoGlasses from "../assets/images/maxence.png";

function ClickablePicture () {
    const [isNoGlasses, setNoGlasses] = useState(true);

    const toggleImage = () => {
        setNoGlasses(!isNoGlasses);
    }
    return (
        <img src={isNoGlasses ? maxNoGlasses : maxGlasses}
        onClick={toggleImage}
        style={{cursor: "pointer"}}
        />
    )
}




export default ClickablePicture;
