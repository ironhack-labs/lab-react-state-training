import React from "react";
import { useState } from "react";

function ClickablePicture() {

    const [pic, setPic] = useState("./assets\images.maxence.png")

    const togglePics = () => {
        if (pic === "./assets\images.maxence.png") {
            setPic("./assets\images.maxence-glasses.png")
        } else {
            setPic("./assets\images.maxence.png")
        }
    };
    return (
        <div>
            <img src={pic} onClick={togglePics} />
        </div>
    )

}

export default ClickablePicture;