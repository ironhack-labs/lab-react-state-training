import { useState } from "react"
import image from "../assets/images/maxence.png"
import imageGlasses from "../assets/images/maxence-glasses.png"

function ClickablePicture() {
    const [isClicked, setIsClicked] = useState(false);
    const changePicture = () => setIsClicked(!isClicked)

    return (
        <img onClick={changePicture} src={isClicked ? imageGlasses : image} />
    )
}

export default ClickablePicture