import { useState } from "react";
import Boy from '../assets/images/maxence.png'
import Glasses from '../assets/images/maxence-glasses.png'

function ClickablePicture() {
    const [toggle, setToggle] = useState(true);
  
    const handleClick = () => {
      setToggle(!toggle);
    };
  
    return (
      <img src={toggle ? Boy : Glasses} alt="Toggle" onClick={handleClick} />
    );
  }
  
  export default ClickablePicture;
