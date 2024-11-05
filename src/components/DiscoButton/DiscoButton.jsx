import { useState } from 'react'
const DiscoButton = () => {

    const [likes, setLikes] = useState(0);
    const [colors, setColors] = useState(blue)
    const handleClick = () => {
        setLikes(likes + 1)
        setColors(prevColor => (colors === 'blue' ? 'red' : blue))
    }
    return (
        <div className="DiscoButton">
            <button onClick={handleClick}>
                {likes} Likes
                {colors}
            </button>

        </div>
    )
}
export default DiscoButton