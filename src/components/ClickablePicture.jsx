import { useState } from 'react';
import max from '../assets/images/maxence.png';
import maxGlasses from '../assets/images/maxence-glasses.png';

function ClickablePicture() {
  const [image, setImage] = useState(max);

  const changeImage = () => {
    if (image === max) {
      setImage(maxGlasses);
    } else if (image === maxGlasses) {
      setImage(max);
    }
  };

  return <img src={image} alt={'image'} onClick={changeImage} />;
}

export default ClickablePicture;
