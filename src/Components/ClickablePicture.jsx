import { useState } from "react"
import sinGafas from "../assets/images/maxence.png"
import conGafas from "../assets/images/maxence-glasses.png"


function ClickablePicture() {

const [ponerGafas, cambiarImg] = useState(sinGafas)


    const handleImg = () =>{
        if(ponerGafas === sinGafas){
        cambiarImg(conGafas)
    }else if(ponerGafas === conGafas){
        cambiarImg(sinGafas)
    }

    }


  return (



    <div>
        
<img onClick={handleImg} src={ponerGafas} alt="foto"  />

    </div>
  )
}

export default ClickablePicture