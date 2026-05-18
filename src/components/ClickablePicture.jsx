import { useState } from 'react';
import img from '../assets/images/maxence.png';
import clickedPic from '../assets/images/maxence-glasses.png';



export default function ClickablePicture(){
const [imgSrc, setImgSrc] = useState(img)

function handleClick(){if(imgSrc === img){
  setImgSrc(clickedPic)
}else{
  setImgSrc(img)
}}

return(
  <div>
    <img src={imgSrc} alt="Maxence" onClick={handleClick} />
  </div>
)


}