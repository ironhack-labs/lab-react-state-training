import { useState } from "react";
import maxence from "../assets/images/maxence.png";
import maxenceGlasses from "../assets/images/maxence-glasses.png";

function ClickablePicture() {
    const [picture , setPicture] = useState(false);

    const currentImage = picture ? maxence : maxenceGlasses
    

    return(

        <section>
            <img onClick={()=>setPicture(!picture)}src = {currentImage} />
        </section>
    )
   
}


export default ClickablePicture;