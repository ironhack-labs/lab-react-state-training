import React, { useState } from 'react';
import maxence from '../assets/images/maxence.png';
import maxenceGlasses from '../assets/images/maxence-glasses.png';

function ClickablePicture() {
  const [showGlasses, setShowGlasses] = useState(false);

  const toggleGlasses = () => {
    setShowGlasses(!showGlasses);
  };

  return (
    <div>
      <img
        src={showGlasses ? maxenceGlasses : maxence}
        alt="Maxence"
        onClick={toggleGlasses}
        style={{ cursor: 'pointer' }}
      />
    </div>
  );
}

export default ClickablePicture;
