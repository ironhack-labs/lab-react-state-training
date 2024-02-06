import {useState} from "react"
import maxence from "../assets/images/maxence.png"
import maxenceGlasses from "../assets/images/maxence-glasses.png"

function ClickAblePicture () {

    const [photo , setPhoto] = useState(false)

    const currentImage = photo ? maxence : maxenceGlasses
    return (

        <section>
            <img onClick={() => setPhoto(!photo)} src ={currentImage}  />
        </section>
    )
}

export default ClickAblePicture ;