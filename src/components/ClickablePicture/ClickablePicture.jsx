import { useState } from 'react'
import boy from './../../assets/images/maxence.png'
import boyWithGlasses from './../../assets/images/maxence-glasses.png'

const ClickablePicture = () => {


    const [picture, setPicture] = useState(false)

    const handlePicture = () => {
        setPicture(!picture)
    }

    return (
        <div className='ClickablePicture'>
            <img onClick={handlePicture} src={picture ? boy : boyWithGlasses} alt='Max meme' />
        </div>
    )
}

export default ClickablePicture
