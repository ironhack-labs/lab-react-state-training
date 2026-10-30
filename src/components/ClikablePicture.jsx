import { useState } from 'react';
import maxence from '../assets/maxence.png';
import maxenceGlasses from '../assets/maxence-glasses.png';

function ClickablePicture() {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked(!isClicked);
  }

  return (
    <img
      src={isClicked ? maxenceGlasses : maxence}
      onClick={handleClick}
      alt="Maxence"
      style={{ width: '200px', cursor: 'pointer' }}
    />
  );
}

export default ClickablePicture;