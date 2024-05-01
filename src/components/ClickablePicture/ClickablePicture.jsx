import originalImage from "../../assets/images/maxence.png"
import glassesImage from "../../assets/images/maxence-glasses.png"
import { useState } from "react"



const ClickOnImage = () => {

    const [image, setGlassesImage] = useState(false)

    const changeImage = () => {
        setGlassesImage(!image)
    }

    return (
        <div className="ChangeImage">
            <img
                src={image ? originalImage : glassesImage}
                alt="Image"
                onClick={changeImage}
            />


        </div>
    )

}

export default ClickOnImage