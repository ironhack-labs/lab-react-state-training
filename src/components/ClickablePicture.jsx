import { useState } from 'react';

function ClickablePicture() {
  const img1 = '/assets/maxence-glasses.png';
  const img2 = '/assets/maxence.png';
  const [currentImg, setCurrentImg] = useState(img1);

  const toggleImage = () => {
    setCurrentImg((prevImg) => (prevImg === img1 ? img2 : img1));
  };

  return <img src={currentImg} alt="Clickable" onClick={toggleImage} />;
}

export default ClickablePicture;