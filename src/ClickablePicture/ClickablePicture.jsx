import { useState } from "react"
import maxence from './../assets/images/maxence.png'
import maxenceglasses from './../assets/images/maxence-glasses.png'

const ClickablePicture = () => {

    const [clickablePicture, setClickablePicture] = useState(false)

    const handlePicture = () => {
        setClickablePicture(!clickablePicture)
    }


    return (
        <div className="ClickablePicture">

            <img onClick={handlePicture} src={clickablePicture ? maxence : maxenceglasses} alt="persona sin gafas" />

        </div>
    )
}

export default ClickablePicture
