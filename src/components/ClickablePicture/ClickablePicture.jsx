import { useState } from "react"
import max from '../../assets/images/maxence.png'
import maxGlasses from '../../assets/images/maxence-glasses.png'

function ClickablePicture() {

    const [hasNoGlasses, setHasGlasses] = useState(true)

    const handleGlasses = () => {
        setHasGlasses(!hasNoGlasses)
    }

    return (
        <div>
            <img
                src={hasNoGlasses ? max : maxGlasses}
                alt="maxence"
                onClick={handleGlasses}
            />
        </div>
    )

}

export default ClickablePicture