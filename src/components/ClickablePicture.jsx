import { useState } from 'react';
import maxGlass from '../assets/images/maxence-glasses.png';
import max from '../assets/images/maxence.png';

const ClickablePicture = () => {
  const [noGlass, setNoGlass] = useState(true);

  return (
    <div className="clickable-pic" onClick={()=>{setNoGlass(!noGlass)}}>
        <img src={noGlass ? max : maxGlass} alt="Pic of Max" className='max-pic'/>
    </div>
  )
}

export default ClickablePicture