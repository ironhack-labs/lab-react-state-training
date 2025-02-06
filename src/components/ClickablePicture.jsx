import { useState } from 'react'
import guy from '../assets/images/maxence.png'
import glasses from '../assets/images/maxence-glasses.png'

const ClickablePicture = () => {
   const [img, setImg] = useState(guy);
   
  return (
    <div>
        <img src={img} onClick={() => setImg(img === guy ? glasses : guy)} alt="guy" />
        
      
    </div>
  )
}

export default ClickablePicture
