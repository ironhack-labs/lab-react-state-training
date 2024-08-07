
import initialImg from "../assets/images/maxence.png"
import GlassesImg from "../assets/images/maxence-glasses.png"
import { useState } from "react"

function ClickablePicture(){
    const [isGlasses, setIsGlasses] = useState(false)

    const handleClick = () => {
        setIsGlasses(!isGlasses)
    }

    return(
        <div>
         <img 
            src={isGlasses ? GlassesImg : initialImg}
            alt={isGlasses ? "maxence" : "maxence with glasses"}
            onClick={handleClick}
         />
        </div>
    )
}

export default ClickablePicture