import React, { useState } from "react";
import pic1 from "../assets/images/maxence.png";
import pic2 from "../assets/images/maxence-glasses.png";

function ClickablePicture() {
  const [glassesAppear, setGlasses] = useState(pic1);

  const handleGlasses = () => {
    if(glassesAppear === pic1){
        setGlasses(pic2)
    }else if(glassesAppear === pic2){
        setGlasses(pic1)
    }
    // glassesAppear = pic1 && setGlasses(pic2);
    // glassesAppear = pic2 && setGlasses(pic1);
  };
  return (
    <div>
      <img src={glassesAppear} alt="picture" onClick={handleGlasses} />
    </div>
  );
}

export default ClickablePicture;
