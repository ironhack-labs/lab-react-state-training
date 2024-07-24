import { useState } from "react"
import maxence from "./../assets/images/maxence.png"
import maxenceGlasses from "./../assets/images/maxence-Glasses.png"

const ClickablePicture = () => {

    const [photoChange, setphotoChange] = useState(false)

    const putGlasses = () => {
        setphotoChange(!photoChange)
    }

    return (
        <div>
            <img src={photoChange ? maxence : maxenceGlasses} onClick={putGlasses} alt="" srcset="" />
        </div>
    )
}

export default ClickablePicture