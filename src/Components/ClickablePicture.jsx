import React, { useState } from 'react';

function ClickableIMG () {

    // UseState(true) = const [orginalValue, wayToChangeValue (in this case it'd be the other picture)]
  const [isFirstImage, setIsFirstImage] = useState(true);

  // URLs of the pics
  const firstImage = "src/assets/images/maxence.png";
  const secondImage = "src/assets/images/maxence-glasses.png";

  // Function to change the image, setIsFirstIMG is the way to changethe pic and checks if it's not the first img and changes it
  function toggleImage () {
    setIsFirstImage(!isFirstImage); 
  };

  return (
    <img
      src={isFirstImage ? firstImage : secondImage} // Setting the if clause
      alt="Cool profile picture" onClick={toggleImage}// click event
      id='pfpIMG'
    />
  );
}

export default ClickableIMG;