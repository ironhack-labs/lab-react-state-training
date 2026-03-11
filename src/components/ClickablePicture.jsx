import { useState } from "react"
import imageOne from "../assets/images/maxence.png"
import imageTwo from "../assets/images/maxence-glasses.png"
import "./ClickablePicture.css"

function ClickablePicture(){

    const [image, setImage] = useState(true)

    const changeImage = () => {
        setImage(!image)
    }
    return(
        <div>
            <img src={image ? imageOne : imageTwo} onClick={changeImage} alt="imagen" className="picture" />
        </div>
    )
}

export default ClickablePicture