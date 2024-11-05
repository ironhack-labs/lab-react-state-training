import { useState } from 'react'
import './ClickablePicture.css'
import withoutGlasses from './../../assets/images/maxence.png'
import withGlasses from './../../assets/images/maxence-glasses.png'

const ClickablePicture = () => {

    const [glassesOn, setGlassesOn] = useState(true)

    const handleLikeClick = () => {
        setGlassesOn(!glassesOn)
    }

    return (
        <div className="ClickablePicture">
            <img onClick={handleLikeClick} src={glassesOn ? withoutGlasses : withGlasses} alt="Glasses" />
        </div>
    )
}

export default ClickablePicture