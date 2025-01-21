import { useState } from 'react';
import img1 from '../images/maxence.png'; // Imagen de Maxence
import img2 from '../images/maxence-glasses.png'; // Imagen con gafas

function ClickablePicture() {
  const [isToggled, setIsToggled] = useState(false);

  const handleClick = () => setIsToggled(!isToggled);

  return (
    <img
      src={isToggled ? img2 : img1}
      alt="Clickable Picture"
      onClick={handleClick}
      style={{ cursor: 'pointer', width: '150px', height: '150px' }}
    />
  );
}

export default ClickablePicture;
