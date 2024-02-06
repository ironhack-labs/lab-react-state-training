import { useState } from 'react'
import './ClickablePicture.css'
import NGpicture from './../../assets/images/maxence.png'
import Gpicture from './../../assets/images/maxence-glasses.png'


function ClickablePicture() {

    const [picture, setPicture] = useState(NGpicture)

    const handlePicture = () => {
        setPicture((picture) => (picture === NGpicture ? Gpicture : NGpicture))
    }

    //setGlasses((prevImg) => (prevImg === img1 ? img2 : img1));  

    return (
        <div className='glasses'>
            <img onClick={handlePicture} src={picture} alt="No Glasses Picture" />
        </div>
    )

}

export default ClickablePicture