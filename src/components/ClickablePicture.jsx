import React, {useState} from "react";
import maxenceGlasses from "../assets/images/maxence-glasses.png";
import maxence from "../assets/images/maxence.png";

function ClickablePicture(){

    const [shades, setShades] = useState(false);

    const toggle = ()=> {setShades(!shades)}

    return(
    <div>
    <img className="shades" src ={shades ? maxenceGlasses: maxence} 
    onClick={toggle}/>
    </div>
    )
}

export default ClickablePicture;