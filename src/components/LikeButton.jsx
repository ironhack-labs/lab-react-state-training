import React  from "react"
import  {useState} from "react"



function LikeButton() {

const [like, setLikeCounter] = useState(0)
const [like2, setLikeCounter2] = useState(0)

const colors = ["#FF5733", "#33FF57", "#3357FF", "#F9A825", "#FF9800", "#9C27B0"];

const [buttonColor, setButtonColor] = useState(colors[0])
const [buttonColor2, setButtonColor2] = useState(colors[0])

function changeColor(currentColor, setColor) {
 const currentIndex = colors.indexOf(currentColor);
 const nextIndex = (currentIndex + 1) % colors.length; // Esto asegura que vuelve al inicio cuando llega al final
 setColor(colors[nextIndex]);
  }
function handleClick () {
    setLikeCounter(like + 1)
    changeColor(buttonColor, setButtonColor)
}
function handleClick2 () {
    setLikeCounter2(like2 + 1)
    changeColor(buttonColor2, setButtonColor2)
}


return ( 

    
    <div>
        <button onClick={handleClick} style={{backgroundColor:buttonColor}}>{like} Likes</button>
        <button onClick={handleClick2} style={{backgroundColor:buttonColor2}}>{like2} Likes</button>
       
    </div>
)
}

export default LikeButton