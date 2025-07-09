import React, { useState } from 'react';
import bobNoGlasses from '../assets/images/BobMarley.png';
import bobWithGlasses from '../assets/images/Bob Glasses.jpg'; 


function ClickablePicture({ className }) {
  const [noGlasses, setNoGlasses] = useState(true);

  const toggleImg = () => {
    setNoGlasses(!noGlasses); 
  };

  return (
    <div>
      <img className={className}
        src={noGlasses ? bobNoGlasses : bobWithGlasses}
        alt="Bob Marley"
        onClick={toggleImg}
        
      />
    </div>
  );
}

export default ClickablePicture


