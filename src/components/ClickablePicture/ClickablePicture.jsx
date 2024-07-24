import './ClickablePicture.css'
import { useState } from 'react'
import withGlasses from './../../assets/images/maxence-glasses.png'
import noGlasses from './../../assets/images/maxence.png'


const ClickablePicture = () => {

    const [picture, setPicture] = useState(true)

    const handlePicture = () => {
        setPicture(!picture)
    }

    return (
        <div className="ClickablePicture">

            <img onClick={handlePicture} src={picture ? noGlasses : withGlasses} alt="picture" />


        </div >

    )
}

export default ClickablePicture