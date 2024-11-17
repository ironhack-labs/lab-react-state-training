import React, { useState } from 'react';

function ClickablePicture ()  {

  const [isClicked, setIsClicked] = useState(false);

  
  const image1 = "src/assets/images/maxence.png";
  const image2 = "src/assets/images/maxence-glasses.png";


  function handleClick () {
    setIsClicked(!isClicked);
  }

  return (
    <div>
      <img
        src={isClicked ? image2 : image1}  
        alt="Toggling Picture"
        onClick={handleClick}  
        style={{ cursor: 'pointer' }} 
      />
    </div>
  );
};

export default ClickablePicture;