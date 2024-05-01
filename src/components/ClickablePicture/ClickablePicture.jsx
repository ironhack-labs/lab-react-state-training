import { useState } from "react"
import MaxenceOff from './../../assets/images/maxence.png'
import MaxenceOn from './../../assets/images/maxence-glasses.png'

const ClickablePicture = () => {


    const [glassesOn, setGlassesOn] = useState(false)

    const handleGlasses = () => {
        setGlassesOn(!glassesOn)
    }


    return (
        <div className="ClickablePicture">
            <img
                src={glassesOn ? MaxenceOff : MaxenceOn}
                alt="Glasses Button"
                onClick={handleGlasses}
            />


        </div>
    )
}
export default ClickablePicture