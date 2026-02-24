import { useState } from 'react';
import normalPic from '../assets/images/maxence.png';
import glassesPic from '../assets/images/maxence-glasses.png';

function ClickablePicture() {
  const [displayPicture, setDisplayPicture] = useState(false);
  const pictureToggle = () => {
    setDisplayPicture(!displayPicture);
  };

  return (
    <>
      <img
        src={displayPicture ? normalPic : glassesPic}
        alt="man-picture"
        onClick={pictureToggle}
      />
    </>
  );
}
export default ClickablePicture;
