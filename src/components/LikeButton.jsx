import { useState } from "react"


function LikeButton() {

    let [ counter, setCounter ] = useState(0)
    let [ color, setColor ] = useState("gray")
    let colorArr=["purple", "blue", "green", "yellow", "orange", "red"]

    const handleIncrease = () => {
        setCounter( counter + 1 )
        let num=Math.floor(Math.random()*6)
        setColor(colorArr[num])
        setCounter( counter + 1 )
            
  }


  return (
    <div className="container">
      <button className="btn" style={{backgroundColor:color}} onClick={handleIncrease}>{counter + " Likes"}</button>
    </div>
  )
}

export default LikeButton