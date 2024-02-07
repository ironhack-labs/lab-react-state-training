import { useState } from "react";
import maxence from "../assets/images/maxence.png"
import maxenceGlasses from "../assets/images/maxence-glasses.png"



function ClickablePicture () {
const [image, setImage] = useState(true)

const clickImage = () => setImage(!image)

return (
    <div >
        <img src={image ? maxence : maxenceGlasses} alt="" onClick={clickImage} />
        
    </div>
)
}

export default ClickablePicture