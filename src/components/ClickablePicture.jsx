import { useState } from "react";

export default function ClickablePicture() {

    const [picutre, setPicture] = useState("src/assets/images/maxence.png")

    const togglePicture = () => {
        picutre === "src/assets/images/maxence.png" ? setPicture("src/assets/images/maxence-glasses.png") : setPicture("src/assets/images/maxence.png")

    }
    return (
        <div className="clickablePicture">
            <img src={picutre} alt="guy picture" onClick={togglePicture} />

        </div>
    );
}