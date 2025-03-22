import { useState } from 'react';
import maxence from '../assets/images/maxence.png';
import maxenceGlasses from '../assets/images/maxence-glasses.png';

function ClickablePicture() {
  const [hasGlasses, setHasGlasses] = useState(false);

  const handleClick = () => {
    setHasGlasses(!hasGlasses);
  };

  return (
    <div>
      <img
    src={hasGlasses ? maxenceGlasses : maxence}
    alt={hasGlasses ? "Maxence with glasses" : "Maxence"}
    onClick={handleClick}
    style={{
      cursor: 'pointer'
    }}
    />
    </div>
    );
}

export default ClickablePicture;