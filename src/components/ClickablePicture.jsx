import  { useState } from 'react';
import maxence from '../assets/images/maxence.png'
import maxGlass from '../assets/images/maxence-glasses.png'


function ClickablePicture() {
    const [showGlasses, setShowGlasses] = useState(false);
   
    return(
        <div className="Maxence">
            <img onClick={() => setShowGlasses(!showGlasses)} src={showGlasses ? maxGlass : maxence}  />
            </div>
    )
}
export default ClickablePicture;