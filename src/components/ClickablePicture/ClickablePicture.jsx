import { useState } from "react"
import "./ClickablePicture.css"
import image1 from "./../../assets/images/maxence.png"
import image2 from "./../../assets/images/maxence-glasses.png"

const ClickablePicture = () => {

    const [currentImage, setCurrentImage] = useState(image1)
    const toggleImage = () => {
        setCurrentImage((prevImage) =>
            prevImage === image1 ? image2 : image1)
    }

    return (
        <div>
            <img
                src={currentImage}
                alt="Clickable Picture"
                onClick={toggleImage}
            />
        </div>
    )
}

export default ClickablePicture

