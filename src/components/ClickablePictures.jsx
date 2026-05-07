import { useState } from "react";
import glasses from "../assets/images/glasses.png";
import maxenceGlasses from "../assets/images/maxence-glasses.png";
import maxence from "../assets/images/maxence.png";

function ClickablePicture() {
    const [isClicked, setIsClicked] = useState(false);
    const toggleImage = () => {
        setIsClicked(!isClicked);
    };

    return (
        <img
        src={isClicked ? glasses : maxence}
        alt="Maxence"
        onClick={toggleImage}
        alt="Clickable"
        style={{ cursor: "pointer", width: "200px"}}
        />
    );
}

export default ClickablePicture;

    