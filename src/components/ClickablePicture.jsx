import { useState } from 'react'
import guyPhoto from '../assets/images/maxence.png'
import guyGlasses from '../assets/images/maxence-glasses.png'
import './ClickablePicture.css'

export default function ClickablePicture() {
    const [currImg, setCurrImg] = useState(guyPhoto);

    const toggleImg = () => {
        currImg === guyPhoto ? setCurrImg(guyGlasses) : setCurrImg(guyPhoto);
    }
    return (
        <div className='clickable-picture'>
            <img src={currImg} alt="Maxence" onClick={toggleImg}/>
        </div>
    );
}
