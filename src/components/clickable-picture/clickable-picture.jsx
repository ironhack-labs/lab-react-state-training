import maxence from'../../assets/images/maxence.png'
import maxenceGlasses from'../../assets/images/maxence-glasses.png'
import { useState } from 'react';

function ClickablePicture() {
    const [click, setClick] = useState(true)

    const handleClick = () => setClick(!click)
    return (
        <div className='container mt-5'>
        <img height="100px" onClick={handleClick} src={click ? maxence : maxenceGlasses} alt={click ? "maxence" : "maxenceGlasses"} />
        </div>
    );
}

export default ClickablePicture;