import { useState } from 'react'
import imgOne from './assets/images/maxence-glasses.png'
import imgTwo from './assets/images/maxence.png'


const ClickablePicture = () => {

    const [changeImg, setDoesImg] = useState(false)

    const handleImg = () => {
        setDoesImg(!changeImg)
    }

    return (
        <div className="ChangeImg">
            <img
                src={changeImg ? imgOne : imgTwo}
                alt="Change Image"
                onClick={handleImg}
            />

        </div>
    )
}

export default ClickablePicture