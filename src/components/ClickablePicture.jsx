
import React, { useState } from "react";
import maxence from "../assets/images/maxence.png"
import maxence_glasses from "../assets/images/maxence-glasses.png"

export default function ClickablePicture() {

    const [showGlasses, setShowGlasses] = useState(true);

    const toggleImage = () => {
        setShowGlasses(!showGlasses);
    };

    return (
        <>
            <img src={showGlasses ? maxence : maxence_glasses} onClick={toggleImage}/>
        </>
    )
}