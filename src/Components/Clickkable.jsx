import React from "react"
import react, { useState } from "react";
import maxenceImage from "../assets/images/maxence.png"
import maxenceglassImage from "../assets/images/maxence-glasses.png"

function Clickable(){

    const [image, setImage]=useState(maxenceImage);
    const Changeimage=()=>{
        setImage(prevImage => prevImage === maxenceImage ? maxenceglassImage : maxenceImage);
        
    }

    return(
        <div>
         <img src={image} alt="Clickable" onClick={Changeimage} />

        </div>
    )

}

export default Clickable;