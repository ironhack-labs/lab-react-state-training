import React, { useState } from "react";
import img from "../assets/images/maxence.png"
import imgClicked from "../assets/images/maxence-glasses.png"


function clickablePicture(){

    const [clicked, setClicked] = useState(false);

    const toggleImage = () => {
        setClicked(!clicked)
    }

    return (
        <img 
        onClick={toggleImage}
        src = {clicked ? imgClicked : img}
        />
    )
}

export default clickablePicture;