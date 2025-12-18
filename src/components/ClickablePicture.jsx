import {useState} from "react";
import image1 from './images/maxence.png'
import image2 from './images/maxence-glasses.png'


function ClickablePicture () {
    const [isImageOne, setImageOne] = useState(true);
    const handleClick = () => {setImageOne(prevIsImageOne => !prevIsImageOne)}
   
    return(
        <div className="clikcable-picture">
            <img 
                src={isImageOne ? image1 : image2}
                alt="Clickable Picture"
                onClick={handleClick} 
            />
        </div>
    )

}

export default ClickablePicture