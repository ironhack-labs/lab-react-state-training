import guy from "../assets/images/maxence.png";
import guyGlasses from "../assets/images/maxence-glasses.png"
import { useState } from "react";


export function ClickablePicture () {

    const [picture, setPicture] = useState(guy);
    const [imgAlt, setImgAlt] = useState("a guy");

    console.log("picture ", picture)

    const togglePicture = () => {
        if (picture === guy ) {
            setPicture(guyGlasses)
            setImgAlt("a guy with glasses")
        } else {
            setPicture(guy);
            setImgAlt("a guy")
        }
    }

    return <img onClick={togglePicture} src={picture} alt={imgAlt} />
}