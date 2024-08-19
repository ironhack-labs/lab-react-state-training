import { useState } from "react"
import image1 from "../assets/images/maxence.png"
import image2 from "../assets/images/maxence-glasses.png"

function ClickablePicture(){
    const [image, setimage] = useState(image1)

    return(
        <div>
            <img
                src = {image}
                onClick={() => setimage(image === image1 ? image2 : image1 )}
            />
        </div>

    )

    

}

export default ClickablePicture