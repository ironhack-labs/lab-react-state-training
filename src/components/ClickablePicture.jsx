import React from "react";
import { useState } from "react";
import maxence from "../assets/images/maxence.png";
import maxenceGlasses from "../assets/images/maxence-glasses.png";

function ClickablePicture() {
  const [showPicture, setShowPicture] = useState(true);

  //    //similar to file 04-conditional-rendering
  //     const togglePicture = () => {
  //     setShowPicture(!showPicture); //this will execute !showpicture in case setShowPicture is true.
  //     //we use it to toggle between the true and false states
  //     //this will be passed inside img in return, here lets set a current state img variable
  //     //so that the variable will set the src of image

  //ternary operator -> condition ? true : false
  const currentPicture = showPicture ? maxenceGlasses : maxence;

  return (
    <div className="ClickablePicture">
      <h2>Iteration 3 - Clickable Picture</h2>
      <img
        onClick={() => setShowPicture(!showPicture)}
        src={currentPicture}
        alt="image on click"
      />
    </div>
  );
}

export default ClickablePicture;
