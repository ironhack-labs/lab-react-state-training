import { useState } from 'react';
import maxence from '../assets/images/maxence.png';
import maxenceGlasses from '../assets/images/maxence-glasses.png';

function ClickablePicture() {
  const [noGlasses, setNoGlasses] = useState(true)

  const toggleImage = () => {
    setNoGlasses(!noGlasses)
  }

  return (
    <img 
      src={noGlasses ? maxence : maxenceGlasses} 
      alt="clickable" 
      onClick={toggleImage}
      style={{width: '200px' }}
    />
  )
}

export default ClickablePicture;