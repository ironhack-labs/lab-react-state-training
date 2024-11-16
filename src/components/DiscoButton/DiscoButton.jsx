import { useState } from 'react'
import './DiscoButton.css'

const DiscoButton = () => {

    const [counterLike, setLikeValue] = useState(0)

    const [buttonColor, setButtonColor] = useState ('')

    let className = ''

    const increaseLikeCounter = () => {

        className = 'selected'
        setLikeValue(counterLike + 1)
        setButtonColor('')

    }

    return (

        <div className='DiscoButton'>
            <button onClick={increaseLikeCounter} style={buttonColor} > {counterLike} Likes</button>
        </div>


    )
}

export default DiscoButton

