import  {useState}  from "react"

function DiscoButton() {

    const [currentLikes, setCurrentLikes] = useState(0)
    const [currentButtonColor, setCurrentButtonColor]  = useState("white")

    const colorsArr = ["purple", "blue", "green", "yellow", "orange", "red"]

    const handleIncrease = () => {
        const randomColorIndex = Math.floor(Math.random() * colorsArr.length)
        const randomColor = colorsArr[randomColorIndex]
        
        setCurrentLikes(currentLikes + 1 )
        setCurrentButtonColor(randomColor)
    }
  return (
    <div>
        <button style={{backgroundColor: currentButtonColor}} onClick={handleIncrease}>{currentLikes} Likes</button>
    </div>
  )
}

export default DiscoButton