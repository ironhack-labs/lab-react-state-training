import img from '../assets/images/maxence.png';
import img2 from '../assets/images/maxence-glasses.png';
import { useState } from 'react';

const ClickablePicture = () => {
    const [showGlasses, setShowGlasses] = useState(false);
    
    const togglePicture = () => {
        setShowGlasses(prev => !prev);
    };
    
    return (
        <img 
            className='change-img'
            src={showGlasses ? img2 : img} 
            onClick={togglePicture}
        />
    );
}

export default ClickablePicture;