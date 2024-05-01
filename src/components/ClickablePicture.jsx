import imgGlasses from '../assets/images/maxence-glasses.png'
import img from '../assets/images/maxence.png'
import { useState } from "react"

function ClickablePicture() {
    let [ imgAux, setImg ] = useState(img)


    const imgClick = ()=>{
        if(imgAux===img){
            setImg(imgGlasses)
        }else{
            setImg(img)
        }
        
    }

  return (
    <div className='container'>
        <img src={imgAux} alt="max" style={{width:"250px"}} onClick={ imgClick } />
    </div>
  )
}

export default ClickablePicture