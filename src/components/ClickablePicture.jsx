import { useState } from 'react';
import firstPic from '../assets/images/maxence.png';
import secondPic from '../assets/images/maxence-glasses.png';

function ClickablePicture() {
  
    const [isClicked, setIsClicked] = useState(false);


  return (

    <img src={isClicked ? secondPic : firstPic}
    alt='clickable picture'
    onClick={() => setIsClicked(!isClicked)}
    />
  );
}

export default ClickablePicture;
