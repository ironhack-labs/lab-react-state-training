import { useState } from "react"

function LikeButton() {

  const [ buttonColor , setButtonColor ] = useState("white")
  const [ likeAmount , setLikeAmount ] = useState(0)
  const colorList = ["purple", "blue", "green", "yellow", "orange", "red"]
  const handleLikes = () => {
    setLikeAmount(likeAmount + 1)
    let randNum = Math.floor(Math.random()*colorList.length)
    setButtonColor(colorList[randNum])
  }
  return (
    <button onClick={handleLikes} style={{backgroundColor:buttonColor}}>{likeAmount} Likes</button>
  )
}

export default LikeButton