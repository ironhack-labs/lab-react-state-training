import { useState } from "react";
import withGlasses from '../assets/images/maxence-glasses.png';
import noGlasses from '../assets/images/maxence.png';


function ClickablePicture(){

    const [glassesDisplay, setGlassesDisplay] = useState(false);
    const glasses = glassesDisplay;
    const display = glasses ? withGlasses : noGlasses;
   


    return(
        <div>
            <img src={display} onClick={()=> {
                setGlassesDisplay(!glassesDisplay);
            }}/>
        </div>
    )
}

export default ClickablePicture; 