import { useState } from "react";
import image1 from "../assets/images/maxence.png"
import image2 from "../assets/images/maxence-glasses.png"

function ClickablePicture () {

    const [toggle, setToggle] = useState(true); // initial stage set to true

    return (

        <div className= "picture-toggle" onClick={() => setToggle(!toggle)}>
            {toggle ? <img src={image1} alt=""/> : <img src={image2} alt="" />}
        </div>

    )
}

export default ClickablePicture;