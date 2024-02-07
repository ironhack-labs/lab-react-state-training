import { useState } from "react";
import image1 from "../assets/images/maxence.png";
import image2 from "../assets/images/maxence-glasses.png";

function ClickablePicture() {
    const [photo , setPhoto] = useState(false)

    const currentImage = photo ? image1 : image2
    return (

        <section>
            <img className="image" onClick={() => setPhoto(!photo)} src ={currentImage}  />
        </section>
    )
}

export default ClickablePicture;