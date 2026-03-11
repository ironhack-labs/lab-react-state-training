import { useState } from "react"
import maxence from '../assets/images/maxence.png'
import maxenceGlasses from '../assets/images/maxence-glasses.png'

function ClickablePicture () {

    const [image, setImage] = useState(maxence)

    const changeImage = () => {
        if(image === maxence){
            setImage(maxenceGlasses)
        } else {
            setImage(maxence)
        }
    }

    return(
        <img src={image} onClick={changeImage}/>
    )
}

export default ClickablePicture