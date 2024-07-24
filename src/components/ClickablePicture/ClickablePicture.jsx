import './ClickablePicture.css'
import boy from './../../assets/images/maxence.png'
import boyWithGlasses from './../../assets/images/maxence-glasses.png'
import { useState } from 'react'

const ClickablePicture = () => {

    const [putGlasses, setPutGlasses] = useState(false)
    const handlePhoto = () => {
        setPutGlasses(!putGlasses)
    }

    return (
        <div className="ClickablePicture">
            <img onClick={handlePhoto} src={putGlasses ? boyWithGlasses : boy} alt="" />
        </div>
    )
}

export default ClickablePicture