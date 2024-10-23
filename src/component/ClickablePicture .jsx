import React from "react";
import {useState} from "react";
import maxenceWithGlasses from '../assets/images/maxence.png';
import maxenceWithoutGlasses from '../assets/images/maxence-glasses.png';
import App from "../App";
function ClickablePicture(){
    const [Glasses, setGlasses] = useState(false);
    const toggleImage = () => {
        setGlasses(!Glasses);
      };
    return(
        <img src={Glasses ? maxenceWithGlasses : maxenceWithoutGlasses} 
      alt="Maxence" 
      onClick={toggleImage} 
      style={{ cursor: 'pointer' }}
    />
  );
}
export default ClickablePicture