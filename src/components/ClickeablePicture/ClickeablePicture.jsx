import { useState } from "react";
import maxence from "./../../assets/images/maxence.png"
import maxenceGlasses from "./../../assets/images/maxence-glasses.png"


function ClickeablePicture() {

    const [picture, setPicture] = useState(true)
    const handleClickChange = () => {
        setPicture(!picture)
    }
    return (
        <div>
            <img src={picture ? maxence : maxenceGlasses} alt="maxence" onClick={handleClickChange} />
        </div>
    )
}
export default ClickeablePicture