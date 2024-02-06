import {useState} from "react"
import maxence from './../../assets/images/maxence.png'
import maxenceGlass from './../../assets/images/maxence-glasses.png'

function ClickablePicture(){
    const[isClicked, ifIsClicked] = useState(true)

    const handleClick = () => {
        ifIsClicked (!isClicked)
    }
    return(
        <div className = "clickablePicture">
            <img onClick={handleClick} 
            src={isClicked ? maxence : maxenceGlass}
            alt="image">
            </img>
        </div>
    )
}

export default ClickablePicture