import React from "react";
import { useState } from "react";
import redpic from "../assets/images/redpic.png";
import sunglass from "../assets/images/sunglasses.png";
import "../glassstyle.css";

function ClickablePicture() {
  const [showSunglass, setShowSunglass] = useState(false);
  const handleClick = () => setShowSunglass(!showSunglass);
  return (
    <div onClick={handleClick}>
      <img src={redpic} alt="image" className="base-image" />

      {showSunglass && (
        <img src={sunglass} alt="sunglass" className="overlay" />
      )}
    </div>
  );
}

export default ClickablePicture;
