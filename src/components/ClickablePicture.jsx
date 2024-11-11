import { useState } from "react"
import maxenceImg from '../assets/images/maxence.png';
import maxenceImgGlasses from '../assets/images/maxence-glasses.png'

const ClickablePicture = () => {
    const image = document.querySelector('img');
    function handleClick() {
        if(clickablePicture === maxenceImg) {
            setClickablePicture(maxenceImgGlasses)
        } else setClickablePicture(maxenceImg)
     
    }
    
    const [clickablePicture, setClickablePicture] = useState(maxenceImg)
  return (
    <div>
        <img src={clickablePicture} alt=""  onClick={handleClick}/>
    </div>
  )
}

export default ClickablePicture