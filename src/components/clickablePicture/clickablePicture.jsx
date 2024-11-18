import { useState } from "react";
import harold from "../../assets/images/harold.webp";
import mascara from "../../assets/images/mascara.png";

function ClickablePicture() {
   
    const [showMascara, setshowMascara] = useState(false);
    const toggleImage = () => {
        setshowMascara(!showMascara);
    };



    return (
        <img 
            src={showMascara ? mascara : harold} 
            alt="Clickable" 
            onClick={toggleImage} 
            style={{ cursor: "pointer" }}
        />
    );

    /* o lo que es lo mismo...
    
    let imageToShow;
    if (showMascara) {
        imageToShow = mascara;
    } else {
        imageToShow = harold;
    }
        
    */
}

export default ClickablePicture;