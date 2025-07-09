import img1 from "../assets/images/maxence.png"
import img2 from "../assets/images/maxence-glasses.png"
import { useState } from "react"


function ClickablePicture () {

    const [clicked, setClicked] = useState(false)

    let imgClicked = () => {
        setClicked(!clicked)
    }


    return (
        <img src={clicked ? img2 : img1} alt="Clickable" onClick={imgClicked} style={{cursor: 'pointer', width:'150px', marginLeft:'630px'}} />

    )
}


export default ClickablePicture