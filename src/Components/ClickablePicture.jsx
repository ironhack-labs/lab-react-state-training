import { useState } from "react";
import image from "../assets/images/maxence.png"
import glassImage from "../assets/images/maxence-glasses.png"

function ClickablePicture(){

    const [newImage, setNewImage]= useState(image)
   
    const glasses= ()=>{
        setNewImage((prevImg)=>(prevImg=== image ? glassImage : image))
    }
    return (
        <div>
            <img src={newImage} alt="Clickable" onClick={glasses}/>
            
        </div>
    );
}


export default ClickablePicture