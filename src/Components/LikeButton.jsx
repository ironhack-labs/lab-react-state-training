import React, {useState} from 'react'

export const LikeButton = () => {
    const [likes, setLikes] = useState(0)

    return (
        <div>
            <button 
                style={{color: 'black', padding: '10px'}}
                onClick={() => setLikes(likes + 1)}
            >
                { likes } Likes
                </button>
        </div>
    )
}

export default LikeButton