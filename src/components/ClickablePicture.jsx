import { useState } from 'react';
import maxence from '../assets/images/maxence.png';
import maxenceGlasses from '../assets/images/maxence-glasses.png';

function ClickablePicture(props) {
  const [click, setClick] = useState(false);

  const currentImage = click ? maxenceGlasses : maxence;

  return (
    <div>
      <img
        onClick={() => setClick(!click)}
        style={{ height: '150px' }}
        src={currentImage}
        alt="click"
      />
    </div>
  );
}

export default ClickablePicture;