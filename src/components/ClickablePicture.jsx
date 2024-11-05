
import maxence from '../assets/images/maxence-glasses.png'
import maxenceGlasses from '../assets/images/maxence.png'
import { useState } from 'react'

const ClickeablePicture = () => {
    const [image, setImage] = useState(maxenceGlasses)


    const handleClick = () => {
        setImage(image === maxenceGlasses ? maxence : maxenceGlasses)

    };
    return (
        <div onClick={handleClick}>
            <img src={image}></img>
        </div>
    );

}

export default ClickeablePicture