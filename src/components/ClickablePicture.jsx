import React from "react"
import { useState } from 'react';



function ClickablePicture() {

    const [isVisible, setIsVisible] = useState(true);

    const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>

        <button onClick={handleToggle}>
        {isVisible ? "normal" : "star"}
      </button>

        <div id="container"> 
    <img src="src/assets/images/maxence.png" className="maxence"/>

    {isVisible && (
        <img 
          src= "src/assets/images/glasses.png"
          alt="Description" 
          style={{ marginTop: "10px", width: "250px" }} 
          className="lunettes"
        />)}
    </div>
    </div>
  )
}
export default ClickablePicture