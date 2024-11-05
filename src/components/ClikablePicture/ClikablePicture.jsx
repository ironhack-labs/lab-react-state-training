
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
            <img onClick={handleClickPicture} src={picture ? originalPic : glassesPic} alt="Man pic" />
        </div>
    )
}
export default ClickablePicture