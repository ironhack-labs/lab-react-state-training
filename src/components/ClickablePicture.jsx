import { useState } from "react";
import maxence from "../assets/images/maxence.png";
import maxenceGlasses from "../assets/images/maxence-glasses.png";


function ClickablePicture () {

    const [toggle, setToggle] = useState(true);

    const handleClick = () => setToggle(!toggle);

    return(
        <div>

             <img src={toggle ? maxence : maxenceGlasses} onClick={handleClick} />

        </div>
    )

}

export default ClickablePicture;