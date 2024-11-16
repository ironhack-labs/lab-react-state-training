import { useState } from 'react'
import './LikeButton.css'

const LikeButton = () => {

    const [counterLike, setLikeValue] = useState(0)

    let className = ''

    const increaseLikeCounter = () => {

        className = 'selected'
        setLikeValue(counterLike + 1)

    }

    return (

        <div className='LikeButton'>
            <button onClick={increaseLikeCounter} /*</div>className =`${className}`*/ > {counterLike} Likes</button>
        </div>


    )
}

export default LikeButton

