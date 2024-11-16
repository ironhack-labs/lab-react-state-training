import { useState } from 'react'
import './ClickablePicture.css'
import normalPicture from '../../assets/images/maxence.png'
import glassesPicture from '../../assets/images/maxence-glasses.png'


const ClickablePicture = () => {

    const [imageValue, setImage] = useState(normalPicture)

    const changePicture = () => {

        if (imageValue === normalPicture) {
            setImage(glassesPicture)
        } else {
            setImage (normalPicture)
        }

    }

    return (

        <div className='ClickablePicture' onClick={changePicture} >
            <img src={imageValue} alt="" />
        </div>


    )
}

export default ClickablePicture

