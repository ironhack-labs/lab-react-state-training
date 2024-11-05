import "../ClickablePicture/ClickablePicture.css"
import { useState } from "react";
import originalPic from "../../assets/images/maxence.png"
import glassesPic from "../../assets/images/maxence-glasses.png"

const ClickablePicture = () => {
    const [picture, customPicture] = useState(true)

    const handleClickPicture = () => {
        customPicture(!picture)
    }

    return (
        <div className="ClickablePicture">
            <h1>CLICKABLE PICTURE</h1>
            <img onClick={handleClickPicture} src={picture ? originalPic : glassesPic} alt="Maxence" />
        </div>
    )
}

export default ClickablePicture