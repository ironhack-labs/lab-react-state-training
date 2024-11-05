import { useState } from 'react';
import './ClickablePicture.css'
import normalImage from "../../assets/images/maxence.png"
import withGlasses from "../../assets/images/maxence-glasses.png"

const ClickablePicture = () => {

    const [isWithGlasses, setIsWithGlasses] = useState(false)

    const handleClick = () => {
        setIsWithGlasses(!isWithGlasses)
    }
    return (

        <img src={isWithGlasses ? withGlasses : normalImage}
            alt="Toggleable"
            onClick={handleClick}
            className="ClickablePicture"

        />


    )

}
export default ClickablePicture