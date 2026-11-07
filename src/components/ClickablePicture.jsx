import { useState } from 'react';
import imgWithoutGlasses from '../assets/images/maxence.png';
import imgWithGlasses from '../assets/images/maxence-glasses.png';

function ClickablePicture() {
  
  const [isGlasses, setIsGlasses] = useState(false);

 
  function handleClick() {
    setIsGlasses(!isGlasses); 
  }

  return (
    <img 
      src={isGlasses ? imgWithGlasses : imgWithoutGlasses} 
      onClick={handleClick} 
      alt="Maxence"
      style={{ cursor: 'pointer', width: '200px' }}
    />
  );
}

export default ClickablePicture;
