import { useState } from 'react'
import man from '../assets/images/maxence.png'
import glasses from '../assets/images/maxence-glasses.png'

const ClickablePicture = () => {
   const [img, setImg] = useState(man);

  return (
    <div>
        <img src={img} onClick={() => setImg(img === man ? glasses : man)} alt="man" />


    </div>
  )
}

export default ClickablePicture
