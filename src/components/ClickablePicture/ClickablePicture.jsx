import img2 from './../../assets/images/maxence-glasses.png'
import img1 from './../../assets/images/maxence.png'

import { useState } from 'react'

const ClickablePicture = () => {

    const [noGlasses, setGlasses] = useState(img1)

    const handleGlasses = () => {

        setGlasses((prevImg) => (prevImg === img1 ? img2 : img1));

    }

    return (

        <div>
            <img onClick={handleGlasses} src={noGlasses} alt="picture with no glasses" />
        </div>
    )
}

export default ClickablePicture