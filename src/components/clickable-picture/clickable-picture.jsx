import React, { useState } from 'react';
import maxence from '../assets/images/maxence.png';
import maxenceGlasses from '../assets/images/maxence-glasses.png';

function ClickablePicture() {
  const [withGlasses, setWithGlasses] = useState(false); // useState(false) initializes withGlasses to false, meaning it starts by showing maxence.png.

  // Toggle the image between maxence and maxence with glasses
  const toggleImage = () => {
    setWithGlasses(!withGlasses);
  };

  return (
    <img
      src={withGlasses ? maxenceGlasses : maxence}
      alt="Clickable"
      onClick={toggleImage}
      style={{ cursor: 'pointer', width: '200px', height: 'auto' }} // Optional styling
    />
  );
}

export default ClickablePicture;
