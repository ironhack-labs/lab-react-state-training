import { useState } from 'react';
import image1 from '../assets/images/maxence.png'
import image2 from '../assets/images/maxence-glasses.png'

function ClickablePicture() {
    const [isImage1, setIsImage1] = useState(true);

    const handleClick = () => {
        setIsImage1(!isImage1);
    };

    const displayImage = isImage1 ? image1 : image2;

    return (
        <div>
            <img src={displayImage} alt='picture' onClick={handleClick}/>
        </div>
    );
}

export default ClickablePicture;
