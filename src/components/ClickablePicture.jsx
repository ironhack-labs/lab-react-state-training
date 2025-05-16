import React from "react";
import PhotoMaxence from "../assets/images/maxence.png";
import Lunettes from "../assets/images/maxence-glasses.png";
import { useState } from "react";

function ClickablePicture() {
  /* const [sinGafas, setCongafas] = useState({ PhotoMaxence }); */
  const [showGafas, setShowGafas] = useState(false);

  const toggleGafas = () => {
    setShowGafas(!showGafas);
  };

  return (
    <div>
      {!showGafas && (
        <img src={PhotoMaxence} alt="photo maxence" onClick={toggleGafas} />
      )}
      {showGafas && (
        <img src={Lunettes} alt="photo maxence" onClick={toggleGafas} />
      )}
    </div>
  );
}
export default ClickablePicture;
