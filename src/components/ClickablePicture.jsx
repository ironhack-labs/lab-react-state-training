import { useState } from 'react'
import alternateImage from "../assets/images/maxence-glasses.png"
import initialImage from "../assets/images/maxence.png"



function ClickablePicture(){
    const [currentImage, setCurrentImage] = useState(initialImage);
    const toggleImage = () => {setCurrentImage(currentImage === initialImage ? alternateImage : initialImage)};

    return(           
        <div>
            
            <img 
             src={currentImage} width={200} height={200}             
             onClick={toggleImage} 
             
             />

        </div>
            
    ) 
        


}
export default ClickablePicture