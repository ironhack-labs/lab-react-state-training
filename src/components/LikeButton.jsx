import { useState } from 'react'


function LikeButton() {
    let [count, setCount] = useState(0)

    const handleIncrease = () => {
        setCount(count +1)
    }
    return(
        <div>
            <button className='like' onClick={ handleIncrease}><b>{count} Likes</b></button>
            
        </div>
    )
}

export default LikeButton