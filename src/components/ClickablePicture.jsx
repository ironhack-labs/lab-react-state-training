import foto1 from "../assets/images/maxence.png"
import foto2 from "../assets/images/maxence-glasses.png"
import { useState } from "react"

function ClickablePicture() {

    const [currentImg, setCurrentImg] = useState(foto1)

    const handleImg = () => {
        setCurrentImg( currentImg === foto1 ? foto2 : foto1)
    }
  return (
    <div>
        <img src={currentImg} alt="fotoimg" onClick={handleImg} />
    </div>
  )
}

export default ClickablePicture