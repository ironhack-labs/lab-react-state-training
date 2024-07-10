import { useState } from "react"


const colorsArr = ["purple", "blue", "green", "yellow", "orange", "red"]



function DiscoButton() {

const [countLikes, addLikes] = useState(0)
const [currentColorIndex, setCurrentColorIndex] = useState(0);

const handleSumar = () => {

    addLikes(countLikes + 1)
    setCurrentColorIndex((currentColorIndex+1) % colorsArr.length)
    
} 

const style = {
    backgroundColor : colorsArr[currentColorIndex]
}

  return (

    <div>
        
        <button style={style} onClick={handleSumar}>{countLikes}Likes</button>

    </div>
  )
}

export default DiscoButton