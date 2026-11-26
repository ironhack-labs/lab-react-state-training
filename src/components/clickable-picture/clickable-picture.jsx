import { useState } from "react"
import "./clickable-picture.css"

function ClickablePicture () {

    const [photo, setPhoto] = useState("./src/assets/images/maxence.png")
    const [alt, setAlt] = useState("Maxence without glasses")

    const togglePhoto = () => {
       if (photo === "./src/assets/images/maxence.png") {
        setPhoto("./src/assets/images/maxence-glasses.png")
        toggleAlt()
       } else {
        setPhoto("./src/assets/images/maxence.png")
        toggleAlt()
       }
    }

    const toggleAlt = () => {
        if (alt === "Maxence without glasses") {
            setAlt("Maxence with glasses")
        } else {
            setAlt("Maxence without glasses")
        }
    }

    return <div> <img className="image" onClick={togglePhoto} src={photo} alt={alt} />
    </div>
}

export default ClickablePicture