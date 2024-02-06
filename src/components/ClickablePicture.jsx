import React, { useState } from 'react';

function ClickablePicture  () {
  
  const [isImage1, setIsImage1] = useState(true);

 
  const toggleImage = () => {
    setIsImage1(!isImage1);
  };

  return (
    <div>
      
      <img
        src={isImage1 ? '/Users/busrakocer/ironhack/4w2d/lab-react-state-training/src/assets/images/maxence.png' : '/Users/busrakocer/ironhack/4w2d/lab-react-state-training/src/assets/images/maxence-glasses.png'}
        alt="Clickable Picture"
        onClick={toggleImage}
        style={{ cursor: 'pointer' }}
      />
    </div>
  );
};

export default ClickablePicture;
