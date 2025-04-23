

import { useState } from 'react';

const ClickablePicture = () => {
  const [clicked, setClicked] = useState(false);

  let imgSrc;
  if (clicked) {
    imgSrc = "lab-react-state-training/src/assets/images/maxence-glasses.png";
  } else {
    imgSrc = "lab-react-state-training/src/assets/images/maxence-glasses.png";
  }

  return (
    <img
      src={imgSrc}
      alt="toggle"
      onClick={() => setClicked(!clicked)}/>
    
  );
};

export default ClickablePicture;
