import { useState } from "react"


function LikeButton() {

  const [likesLeft, setLikesLeft] = useState(0) // starts with 0 Likes
  const [likesRight, setLikesRight] = useState(0) // starts with 0 Likes

  const colorsArr = ["purple", "blue", "green", "yellow", "orange", "red"]

  const [colorArrIndexLeft, setColorArrIndexLeft] = useState(0)
  const [colorArrIndexRight, setColorArrIndexRight] = useState(0)

  const handleLikeLeft = () => {
    setLikesLeft(likesLeft + 1)
    setColorArrIndexLeft((colorArrIndexLeft + 1) % colorsArr.length)
  } 

  const handleLikeRight = () => {
    setLikesRight(likesRight + 1)
    setColorArrIndexRight((colorArrIndexRight + 1) % colorsArr.length)
  } 

  return (
    <>

      <button onClick={handleLikeLeft}
        style={{ backgroundColor: colorsArr[colorArrIndexLeft],
        color: colorsArr[colorArrIndexLeft] === "yellow" ? "black" : "white" }}> {/* changes font color only with yello bg */}
        {likesLeft} Likes
      </button>
      <button onClick={handleLikeRight}
        style={{ backgroundColor: colorsArr[colorArrIndexRight],
        color: colorsArr[colorArrIndexRight] === "yellow" ? "black" : "white" }}>
        {likesRight} Likes
      </button>

    </>
  )
}

export default LikeButton