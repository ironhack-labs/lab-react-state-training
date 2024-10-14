import React, { useState } from 'react';
import maxence from "../assets/images/maxence.png";
import MaxenceGlasses from "../assets/images/maxence-glasses.png";

function ClickablePicture() {
    const [showGlasses, setShowGlasses] = useState(false);
    
    //const toggleGlasses = () => {setShowGlasses(!showGlasses);}
    console.log(showGlasses)
    return(
        <div className="Maxence">
            <img onClick={() => setShowGlasses(!showGlasses)} src={showGlasses ? MaxenceGlasses : maxence}  />
            </div>
    )
}

export default ClickablePicture;

