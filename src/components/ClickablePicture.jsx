import { useState } from "react";
import dude from "../assets/images/maxence.png";
import dudeGlasses from "../assets/images/maxence-glasses.png";
import "./clickablePicture.css"

function ClickablePicture(){

    const [flip, setFlip] = useState(1)

    let pic = dude;
    
    if(flip === 1){
        pic = dude;
    }
    else if(flip === -1){
        pic = dudeGlasses;
    }


    return (
            <img className="dude" src={pic} onClick={()=>setFlip(flip*-1)}/>
    )
}

export default ClickablePicture;