import { useState } from "react";
import img from "../assets/images/maxence.png"
import imgClicked from "../assets/images/maxence-glasses.png"


export default function ClickablePicture() {
    const [clicked, setClicked] = useState(false);

    return (
        <img
            src={clicked ? imgClicked : img}
            alt="maxence"
            onClick={() => setClicked(!clicked)}
        />
    )

}