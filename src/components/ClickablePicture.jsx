import React, {useState} from "react";


function ClickablePicture() {
  const [imagePath, setImagePath] = useState('./src/assets/images/maxence.png');

  const handleClick = () => {
    setImagePath(imagePath === './src/assets/images/maxence.png' ? './src/assets/images/maxence-glasses.png' : './src/assets/images/maxence.png');
  };

  return (
    <img 
      src={imagePath}
      alt="Clickable Picture"
      onClick={handleClick}
    />
  );
}

export default ClickablePicture;