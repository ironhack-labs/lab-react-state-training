import { useState } from 'react';
import imgNotClicked from '../assets/images/maxence.png';
import imgClicked from '../assets/images/maxence-glasses.png';

function ClickablePicture() {
  // Boolean state to track which image to show
  const [isClicked, setIsClicked] = useState(false);

  // Function to toggle the state between true and false
  const toggleImage = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div onClick={toggleImage} style={{ cursor: 'pointer' }}>
      <img
        src={isClicked ? imgClicked : imgNotClicked}
        alt="Toggleable"
        style={{ width: '200px' }}
      />
    </div>
  );
}

export default ClickablePicture;
