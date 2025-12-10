import { useState } from 'react';

function ClickablePicture() {
  const [isClicked, setIsClicked] = useState(false);

  const togglePicture = () => {
    setIsClicked(!isClicked);
  };

  return (
    <img
      src={isClicked ? '/src/assets/images/maxence-glasses.png' : '/src/assets/images/maxence.png'}
      alt="Clickable"
      onClick={togglePicture}
      style={{ cursor: 'pointer' }}
    />
  );
}

export default ClickablePicture;