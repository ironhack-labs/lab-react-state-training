import { useState } from "react";
import maxence from "../../images/maxence.png";
import glasses from "../../images/maxence-glasses.png";


function ClikablePicture( {className =''}) {
    const [isClicked, setIsClicked] = useState (false);

    const handleImage = () => {
        setIsClicked(!isClicked);
    };
    
    return (
        <>        
        <img 
            src= { isClicked ? glasses : maxence}
            alt="foto"
            onClick={handleImage}
            className = {className}
        />
        </>
    );

}

export default ClikablePicture;
