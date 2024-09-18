import { useState } from 'react'
import firstPicture from '../assets/images/maxence.png'
import secondPicture from '../assets/images/maxence-glasses.png'

function ClickablePicture() {
    let [change, setChange] = useState(true)

    const handleChange = () => {
        setChange(prevState => !prevState)
    }
    return (
        <div>
            <img className='img' src={change ? firstPicture : secondPicture}
                onClick={handleChange} />
        </div>
    )
}

export default ClickablePicture