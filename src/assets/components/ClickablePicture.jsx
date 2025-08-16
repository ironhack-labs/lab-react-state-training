import { useState } from "react"
import maxence from "../images/maxence.png"
import maxenceGlasses from "../images/maxence-glasses.png"

function ClickablePicture() {
    const [isGlassesOn, setIsGlassesOn] = useState(false);
    const toggleGlasses = () => {
        setIsGlassesOn(!isGlassesOn);
    }
    const imageSrc = isGlassesOn ? maxenceGlasses : maxence;

    

  return (
    <section className="iteration"> 
    <header className="header">Iteration 3 | ClickablePicture</header>
        <img 
            src={imageSrc} 
            alt="Maxence" 
            className="clickablePicture" 
            onClick={toggleGlasses} 
        />
</section>
  )
}

export default ClickablePicture