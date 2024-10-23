import { useState } from "react"
import maxence from "../assets/images/maxence.png"
import maxenceGlasses from "../assets/images/maxence-glasses.png"

function ClickablePicture (){
    const [selected, setSelected]= useState(maxence);

    const toggleImage = () => {
        setSelected (prevImage =>
            prevImage === maxence ? maxenceGlasses : maxence
        );
    };



    return (
        <>
        <img src={selected} 
        alt="boy" 
        onClick={toggleImage}/>
    
    </>
        );
    }

export default ClickablePicture

