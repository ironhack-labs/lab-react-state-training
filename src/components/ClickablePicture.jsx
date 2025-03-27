import { useState } from "react";
import normalPic from "../assets/images/maxence.png";
import clickedPic from "../assets/images/maxence-glasses.png";

function ClickablePicture(){

    const [isClicked, setIsClicked] = useState(false);

    const toggleImage = () => {
        setIsClicked((prev) => !prev);
    };

    return(
     <div>
          <img 
                src={isClicked ? clickedPic : normalPic} 
                onClick={toggleImage} 
                style={{ cursor: "pointer", width: "350px" }} 
            />
     </div>   
    );
}

export default ClickablePicture