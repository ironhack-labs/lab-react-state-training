import React from 'react'
import { useState } from 'react'
import pictureOne from '../assets/images/maxence.png'
import pictureTwo from '../assets/images/maxence-glasses.png'

function ClickablePicture() {
    let [transform, setTransform] = useState(true)

    const handleTransform = () => {
        setTransform(beforeState => !beforeState)
    }
    return (
        <div>
            <img className='img' src={transform ? pictureOne : pictureTwo}
                onClick={handleTransform} />
        </div>
    )
}

export default ClickablePicture