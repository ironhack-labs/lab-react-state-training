import { useState } from 'react';
import img1 from "../assets/images/maxence.png"; 
import img2 from "../assets/images/maxence-glasses.png"; 

function ClickablePicture() {
  const [isToggled, setIsToggled] = useState(false);

  const toggleImage = () => {
    setIsToggled(!isToggled);
  };

  return (
    <img 
      src={isToggled ? img2 : img1} 
      onClick={toggleImage} 
      className="img-toggle" 
      alt="clickable" 
    />
  );
}

export default ClickablePicture;