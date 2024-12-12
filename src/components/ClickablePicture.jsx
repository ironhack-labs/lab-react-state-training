import React, {useState } from "react";
import without from "../assets/images/maxence.png";
import withimage from "../assets/images/maxence-glasses.png";

function ClickablePicture(){

    const [active, setActive] = useState(false);

    const handleChangeActive = () => {
      setActive((active) => {return !active});
    };

    //active={active} handleChangeActive={handleChangeActive}


    
    return(
        <div>
            <img onClick={handleChangeActive} src={active ? "/maxence-glasses.png" : "/maxence.png"}/> 
        </div>


    )
}
export default ClickablePicture;
