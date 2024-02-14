import  {useState}  from "react"

function LikeButton() {

    const [currentLikes, setCurrentLikes] = useState(0)

    const handleIncrease = () => {
        setCurrentLikes( currentLikes + 1)
    }

  return (
    <div>
        <button onClick={handleIncrease}>{currentLikes} Likes</button>
    </div>
  )
}

export default LikeButton