import { useState } from "react"
import picture1 from "../assets/images/maxence.png"
import picture2 from "../assets/images/maxence-glasses.png"

function ClickablePicture () {
    const [changeImage, setChangeImage] = useState(false)
    return (
        <>
           {changeImage ? (
            <img src={picture1} alt="Without sunglasses" />
           ) : (
            <img src={picture2} alt="with sunglasses" />
           )} 
           <button onClick={() => setChangeImage(!changeImage)}>
            change
           </button>
        </>
    )
}

export default ClickablePicture