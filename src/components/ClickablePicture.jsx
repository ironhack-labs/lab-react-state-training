import { useState } from "react"


export default function ClickablePicture(){
    const [pictureURL, setPictureURL] = useState("src/assets/images/maxence.png");

    return(
        <img src={pictureURL} alt="steve" onClick={() => {setPictureURL(pictureURL === "src/assets/images/maxence.png"? "src/assets/images/maxence-glasses.png" : "src/assets/images/maxence.png")}} />
    )
}