import { useState } from 'react';
import picture1 from '../assets/images/maxence.png';
import picture2 from '../assets/images/maxence-glasses.png';

export default function ClickablePicture() {
  const [isFirstPicture, setIsFirstPicture] = useState(true);

  const togglePicture = () => {
    setIsFirstPicture(!isFirstPicture);
  };

  return (
    <div>
      <img
        src={isFirstPicture ? picture1 : picture2}
        alt="toggleable"
        onClick={togglePicture}
        style={{ cursor: 'pointer' }}
      />
    </div>
  );
}
