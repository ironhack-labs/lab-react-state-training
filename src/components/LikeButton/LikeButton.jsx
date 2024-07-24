import './LikeButton.css'
import { useState } from 'react'

const LikeButton = () => {

    const [doesLike, setDoesLike] = useState(0)

    const handleLike = () => {
        setDoesLike(doesLike + 1)
    }

    return (
        <div className='LikeButton'>
            <button onClick={handleLike}>Like {doesLike}</button>
        </div>
    )
}

export default LikeButton