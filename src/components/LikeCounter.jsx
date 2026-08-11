import {useState} from "react"

function LikeCounter () {
    const [likeCounterValue, setLikeCounterValue] = useState(0)

    const handleIncreaseCounter = () => {
        setLikeCounterValue(likeCounterValue + 1)
    
    }
    return (
        <div>
            
<button onClick={ handleIncreaseCounter}>{likeCounterValue} Likes</button>
<button onClick={ handleIncreaseCounter}>{likeCounterValue} Likes</button>
        </div>
    )

}

export default LikeCounter