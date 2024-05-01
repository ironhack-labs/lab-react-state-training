import {useState} from "react"



function DiscoButton() {
    
    const [ buttonColor, setButtonColor ] = useState("gray")
    let [ like, setLike ] = useState(0)
    
        

    function randomColors(){
        const colors = ["purple", "blue", "green", "yellow", "orange", "red"]
        const randomNumber = Math.floor(Math.random()*colors.length)
        setButtonColor(colors[randomNumber])
        setLike(like+1)
    
    }
    
  return (
    <div>
        
        <button onClick={randomColors} style={{backgroundColor: buttonColor}}>{like} Likes</button>
        
    </div>
  )
}
export default DiscoButton

 

