import { useState } from "react"
import maxeceneImg from "../assets/images/maxence.png"
import gafasImg from "../assets/images/maxence-glasses.png"

function ClickablePicture() {

    const [changeImage, setChangeImage] = useState(maxeceneImg)

    const handleImageChange = () => {
       
        {changeImage === maxeceneImg ? setChangeImage(gafasImg): setChangeImage(maxeceneImg)}
    }

  return (
    
    <div>
        <img onClick={handleImageChange} src={changeImage} alt="foto" width="200px"/>

      </div>
   
  )
}

export default ClickablePicture