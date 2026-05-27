
import { useState } from 'react'
import imgMaxence from '../assets/images/maxence.png'
import imgMaxenceGlasses from '../assets/images/maxence-glasses.png'

export const ClickablePicture = () => {

    const [picture, setPicture] = useState(imgMaxence)

    const changePicture = () => {
        setPicture(picture === imgMaxence ? imgMaxenceGlasses : imgMaxence)
    }

    return (
        <>
            <img className='profile-picture' onClick={changePicture} src={picture} alt="" />
        </>
    )
}