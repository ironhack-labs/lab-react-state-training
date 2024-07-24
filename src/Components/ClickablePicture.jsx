import noGlasses from "./../assets/images/maxence.png"
import withGlasses from "./../assets/images/maxence-glasses.png"
import { useState } from "react"

const ClickablePicture = () => {

    const [click, setClick] = useState(false)

    const handleClick = () => {
        setClick(!click)
    }


    return (
        <div className="ClickPic">
            <p>aqui estara Maxence</p>
            <img onClick={handleClick} src={click ? withGlasses : noGlasses} alt="A person" />


        </div>

    )
}
export default ClickablePicture