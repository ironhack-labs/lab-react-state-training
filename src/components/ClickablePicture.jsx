import { useState } from "react";
import img from "../assets/images/maxence.png";
import imgClicked from "../assets/images/maxence-glasses.png"


function ClickablePicture () {

    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked)
    }

    return (
        <img 
            src={clicked? imgClicked : img}
            alt="Clickable"
            onClick={handleClick}
            style={{cursor:"pointer"}}
        />
    )
}

export default ClickablePicture;