import React from "react";
import { useState } from "react";
import maxence from '../assets/images/maxence.png';
import maxenceGlasses from '../assets/images/maxence-glasses.png';


function ClickablePic() {
  const [newImage, setNewImage] = useState(maxence);
  const swapPic = () => {
    setNewImage(maxenceGlasses);
    if(newImage===maxenceGlasses){
        setNewImage(maxence);}
  };
  return (
    
    <div>
        <div>
        <img src={maxenceGlasses} className="hiddenpic" style={{display:"none"}}/>

        </div>
    
      <img src={newImage} onClick={swapPic} alt="maxence" style={{cursor:'pointer'}} />
    </div>
  );
}
export default ClickablePic;
