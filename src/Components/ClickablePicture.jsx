import ImageOne from '../assets/images/maxence.png'
import ImageTwo from '../assets/images/maxence-glasses.png'
import { useState } from 'react'


function ClickablePicture(){

    const [image, setImage] = useState(false)

    
    
    

    return(
        <div>
            <button onClick={() => setImage(!image)}>
                {image === false ? 
                    <img src={ImageOne} alt="profile-image"/>
                 :  <img src={ImageTwo} alt="profile-image-glasses"/>
                 }
            </button>
        </div>
    );
}

export default ClickablePicture