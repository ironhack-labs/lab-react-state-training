import maxence from '../assets/images/maxence.png'
import maxenceGlasses from '../assets/images/maxence-glasses.png'
import { useState } from 'react';

function ClickablePicture() {
    const [click, setClick] = useState(maxence)
    const toggleClick = () => {
        setClick(prevClick => (prevClick === maxence ? maxenceGlasses : maxence))
    }

    return(
        <img width="200px" onClick={toggleClick} src={click} alt="maxence" />
    )
    
}

export default ClickablePicture;