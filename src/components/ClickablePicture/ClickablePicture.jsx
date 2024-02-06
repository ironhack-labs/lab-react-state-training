import glasses from './../../assets/images/maxence-glasses.png'
import noGlasses from './../../assets/images/maxence.png'
import { useState } from 'react'

const ClickablePicture = () => {

    const [picture, setPicture] = useState(noGlasses)

    const withGlasses = () => {

        setPicture((img) => (img === noGlasses ? glasses : noGlasses));
    }

    return (
        <div className="ClickablePicture">
            <h2>ClickablePicture</h2>

            <img onClick={withGlasses} src={picture} alt="no Glasees" />

        </div>
    )
}

export default ClickablePicture