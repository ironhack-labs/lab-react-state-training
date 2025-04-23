import { useState } from 'react'
import img1 from '../assets/images/maxence.png'
import img2 from '../assets/images/maxence-glasses.png'

function ClickablePicture() {

    const [toggle, setToggle] = useState(img1)

    const handleClick = () => {
        if (toggle === img1) {
            setToggle(img2);
        } else {
            setToggle(img1);
        }
    };

    return (
        <div className = "photo">
        <img src={toggle} alt="photo" onClick={handleClick} />
        </div>
    )
}

export default ClickablePicture 