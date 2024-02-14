import { useState } from "react"

function LikeButton() {

    const number = 0

    const [currentLike, setCurrentLik] = useState(0)

    const handleLikeIncrease = () => {
        setCurrentLik(currentLike + 1)
    }


  return (
    <div>

        <button onClick={handleLikeIncrease}>{currentLike} likes</button>

    </div>
  )
}

export default LikeButton