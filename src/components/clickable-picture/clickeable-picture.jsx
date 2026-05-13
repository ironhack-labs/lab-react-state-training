import { useState } from "react"
import "./clickeable-picture.css"
import maxence from "../../assets/images/maxence.png";
import maxenceGlasses from "../../assets/images/maxence-glasses.png";


function ClickeablePicture () {

    const [picture, setPicture] = useState(false)

    function choosePicture () {
        setPicture(!picture)
    }

    return (
        <div className="image"> 
            <img className="image" src={picture ? maxenceGlasses : maxence} onClick={choosePicture}/>
        </div>

    )
}

export default ClickeablePicture