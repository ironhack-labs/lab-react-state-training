import { useState } from "react"
import normal from "../assets/images/maxence.png"
import cool from "../assets/images/maxence-glasses.png"

let chivato = 1;

function ClickablePicture() {
    const [url, setUrl] = useState(normal)
    return (
        <div>
            <img src={url} alt="normal guy" onClick={()=>{
                if (chivato > 0){
                    chivato *=-1
                    setUrl(cool)
                }
                else if (chivato < 0){
                    chivato *=-1 
                    setUrl(normal)
                }
                }} style={{width:"250px"}}/>
                
        </div>
    )
}

export default ClickablePicture