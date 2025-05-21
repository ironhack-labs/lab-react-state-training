import { useState } from 'react';
import userImg from '../assets/maxence.png';
import userGlassesImg from '../assets/maxence-glasses.png';

function ClickablePicture() {
  const [hasGlasses, setHasGlasses] = useState(false);

  const toggleImage = () => {
    setHasGlasses(!hasGlasses);
  };

  return (
    <img
      src={hasGlasses ? userGlassesImg : userImg}
      alt="User"
      onClick={toggleImage}
      style={{ cursor: 'pointer', width: '200px' }}
    />
  );
}

export default ClickablePicture;
