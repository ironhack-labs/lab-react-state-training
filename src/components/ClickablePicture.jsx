import img1 from "../assets/images/maxence.png"
import img2 from "../assets/images/maxence-glasses.png"
import { useState } from "react"

function ClickablePicture() {

  const [img, setImg] = useState(true);

  const handleChangePhoto = () => {
    setImg(!img)
  }

  return (
    <div>
      <img src={img ? img1 : img2} alt="" onClick={handleChangePhoto} style={{cursor: "pointer"}}/>
    </div>
  )
}

export default ClickablePicture