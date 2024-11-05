import { useState } from "react"
import "./ClickablePicture.css"
import picture1 from "./../../assets/images/maxence.png"
import picture2 from "./../../assets/images/maxence-glasses.png"

const ClickablePicture = () => {

    const [glasses, setGlasses] = useState(false)

    const handleGlasses = () => {
        setGlasses(!glasses)
    }

    return (
        <div className="ClickablePicture">
            <img onClick={handleGlasses} src={glasses ? picture1 : picture2} alt="Sin Gafas" />
        </div>
    )
}

export default ClickablePicture