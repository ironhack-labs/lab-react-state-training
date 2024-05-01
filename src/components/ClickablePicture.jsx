import { useState } from "react"
import imgBoy from './../assets/images/maxence.png'
import imgBoyGl from './../assets/images/maxence-glasses.png'



const ClickablePicture = () => {

    const [picture, setPicture] = useState(true)


    const picWithGlass = () => {
        setPicture(!picture)
    }

    return (
        <div className="Glasses">
            <img
                src={picture ? imgBoy : imgBoyGl}
                alt="Glasses"
                onClick={picWithGlass}
            />


        </div>
    )
}



export default ClickablePicture