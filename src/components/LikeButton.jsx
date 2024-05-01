import {useState} from "react"

function LikeButton() {
    let [ like, setLike ] = useState(0)
    const likeIncrease = () => {
        setLike(like+1)
    }
    
  return (
    <div>
        
        <button onClick={likeIncrease}>{like} Likes</button>
        
    </div>
  )
}

export default LikeButton