import "./ClickablePicture.css";
import { useState } from "react";

function ClickablePicture() {
  const [glasses, setGlasses] = useState(false)
  const noGlasses = './src/assets/images/maxence.png';
  const withGlasses = './src/assets/images/maxence-glasses.png';
  return (
    <div className="img-wrapper" >
      <img onClick={() => setGlasses(!glasses)} src={glasses? withGlasses : noGlasses} alt="boy image" />
    </div> 
  ) 
  
}

export default ClickablePicture;
