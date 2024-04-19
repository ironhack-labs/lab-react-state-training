import React, { useState } from "react";
import maxence from "../assets/images/maxence.png";
import maxenceGlasses from "../assets/images/maxence-glasses.png";

function ClickablePicture() {
  const [isClicked, setIsClicked] = useState(false);
  // adding state to react component

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  //arrow function to handle state change

  // function return div containing img
  //html  in the src we check if isClicked is true
  // with a ternary operator and if true we render
  //maxenceGlasses picture else maxence normal
  // this works by means of an onclick property
  // that call the arrow function stored into the
  //variable handleClick
  return (
    <div>
      <img
        src={isClicked ? maxenceGlasses : maxence}
        alt="Maxence"
        onClick={handleClick}
        style={{ width: "100px", height: "100px" }} // Set width and height
      />
    </div>
  );
}
export default ClickablePicture;
