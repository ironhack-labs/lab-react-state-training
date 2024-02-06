import { useState } from "react";
import maxence from "../assets/images/maxence.png";
import  maxenceGlasses from "../assets/images/maxence-glasses.png";

function ClickablePicture (props) {

    const [toggle,setToggle] = useState(false)
    const toggleImage = ()=> setToggle(!toggle);

    return (
        <div>
            <h1>ClickablePicture</h1>
            {toggle ? (
                <img src = {maxence} alt = "max without glasses" onClick={()=>toggleImage()} width={200} height={200}></img>
            ) : (
                <img src = {maxenceGlasses} alt ="max with glasses" onClick={()=>toggleImage()} width={200} height={200}></img>
            )
            }
        </div>
    )
}

export default ClickablePicture