import { useState } from 'react';
import img1 from '../assets/images/maxence.png';
import img2 from '../assets/images/maxence-glasses.png';

function ClickablePicture() {
  const [clicked, setClicked] = useState(false);

  return (
    <img
      src={clicked ? img2 : img1}
      onClick={() => setClicked(!clicked)}
      alt="Profile"
    />
  );
}

export default ClickablePicture;
