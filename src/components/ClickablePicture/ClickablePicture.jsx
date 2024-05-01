import { useState } from "react"
import './ClickablePicture.css'
import maxence from './../../assets/images/maxence.png'
import maxenceglasses from './../../assets/images/maxenceglasses.png'


const ClickablePicture = () => {
    const [photo, setPhoto] = useState(false)
    const handlePhoto = () => {
        setPhoto(!photo)
    }

    return (
        <div className="ClickablePicture">
            <h1>Clickeable Picture</h1>
            <img
                src={photo ? maxence : maxenceglasses} alt="Maxence with and without glasses" onClick={handlePhoto}
            />
        </div>
    )
}


export default ClickablePicture