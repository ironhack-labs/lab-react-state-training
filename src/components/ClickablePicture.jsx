import { useState } from "react"
import profile from '../assets/images/maxence.png'
import profileGlasses from '../assets/images/maxence-glasses.png'

function ClickablePicture() {

    const [isGlassesOn, setIsGlassesOn] = useState(false)

    const toggleImage = () => {
        setIsGlassesOn(!isGlassesOn)
    }
    return (
        <div>
            <img src={isGlassesOn ? profileGlasses : profile}
                alt="profile"
                onClick={toggleImage}
                style={{ cursor: 'pointer' }} />
        </div>
    )
}

export default ClickablePicture
