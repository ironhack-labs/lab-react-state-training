import { useState } from "react";
import imgWithoutGlasses from "../assets/images/maxence.png"
import imgWithGlasses from "../assets/images/maxence-glasses.png"

function ClickablePicture () {

    const [togglePicState, setTogglePicState] = useState(false);


    return (
        <div>
            <h3>Iteration 3</h3>
             <img 
             onClick={() => setTogglePicState(!togglePicState)} 
             src={togglePicState ? imgWithGlasses : imgWithoutGlasses}
             style={{cursor: "pointer", marginTop: "10px"}}
             />
            
        </div>
    )

}

export default ClickablePicture;