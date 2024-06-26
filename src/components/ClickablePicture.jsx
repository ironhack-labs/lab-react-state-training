import { useState } from "react";

const ClickablePicture = () => {
    const [click, setClick] = useState(false);
  
    const WhenClick = () => {
      setClick((isClicked) => !isClicked);
    };

  
    return (
      <div>
            <img src={click 
            ? "src/assets/images/maxence-glasses.png" 
            : "src/assets/images/maxence.png"} 
            onClick={WhenClick} alt="Maxence"/>

      </div>
    );
  };
  
  export default ClickablePicture;