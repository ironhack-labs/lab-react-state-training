import { useState } from "react";

export default function ClickablePicture() {
    const [picture, setPicture] = useState("../src/assets/images/maxence.png");

    const changePicture = () => {
        setPicture(picture === "../src/assets/images/maxence.png" ? "../src/assets/images/maxence-glasses.png" : "../src/assets/images/maxence.png");
    }

    return <img onClick={changePicture} src={picture} className="picture" />;
}