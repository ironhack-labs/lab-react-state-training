import GlassesOf from './../../assets/images/maxence.png'
import GlassesOn from './../../assets/images/maxence-glasses.png'
import { useState } from 'react'
import './ClickablePicture.css'

const ClickcablePicture = () => {
    const [glasses, setGlasses] = useState(true)

    const handleGlass = () => {
        setGlasses(!glasses)
    }

    return (
        <div className="ClickablePicture">
            <h3>Exercise 3</h3>
            <hr />
            <img className='image'
                src={glasses ? GlassesOf : GlassesOn}
                alt="facherin"
                onClick={handleGlass}
            />
        </div>
    )
}
export default ClickcablePicture