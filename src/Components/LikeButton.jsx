import { useState } from "react"

function LikeButton() {

const [countLikes, addLikes] = useState(0)


const handleSumar = () => {

    addLikes(countLikes + 1)

} 


  return (

    <div>
        
        <button onClick={handleSumar}>{countLikes}Likes</button>

    </div>
  )
}

export default LikeButton