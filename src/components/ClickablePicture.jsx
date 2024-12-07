import { useState } from "react"
import img from  "../assets/images/maxence.png"
import imgChange from '../assets/images/maxence-glasses.png'

function ClickablePicture () { 

    const [picture, setPicture] = useState(img)
    function handleClick (){
        if (img) {
            setPicture(imgChange)
        }
        if (picture === imgChange) {
            setPicture(img)
        }
    }
    
    return  (
        <div>
            <img src={picture} alt="" onClick={handleClick}/>
        </div>
    )
}
export default ClickablePicture