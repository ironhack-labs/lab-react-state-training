import { useState } from "react";

const ClickablePicture = () => {
    const [isImage1, setIsImage1] = useState(true);
  
    const handleClick = () => {
      setIsImage1((prevIsImage1) => !prevIsImage1);
    };
  
    return (
      <img
        src={isImage1 ? '/src/assets/images/maxence.png' : '/src/assets/images/maxence-glasses.png'}
        alt="Clickable Picture"
        onClick={handleClick}
        style={{ cursor: 'pointer' }}
      />
    );
  };
  
  export default ClickablePicture;