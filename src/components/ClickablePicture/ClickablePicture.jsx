import glasses from './../../assets/images/maxence-glasses.png'
import noGlasses from './../../assets/images/maxence.png'
import { useState } from 'react'

function clickablePicture() {

    const [noGlases, setGlasses] = useState(noGlasses)

    const handleGlasses = () => {
        setGlasses((prevImg) => (prevImg === noGlasses ? glasses : noGlasses))
    }
    return (
        <div>
            <img className='glases' onClick={handleGlasses} src={noGlases} alt="noglases Picture" />
        </div>
    )
}

export default clickablePicture