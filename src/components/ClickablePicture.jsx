import { useState } from "react"

function ClickablePicture (props){
    let [counter, setCounter] = useState(0)
    let images = ["src/assets/images/maxence.png", "src/assets/images/maxence-glasses.png", "src/assets/images/glasses.png"]
    return(
        <div>
            <img onClick={()=> counter<1 ? setCounter(counter+1): setCounter(0)} src={`${images[counter]}`} alt="" />
        </div>
    )
}

export default ClickablePicture