import image1 from '../assets/images/maxence.png';
import image2 from '../assets/images/maxence-glasses.png';
import { useState } from 'react';


export function ClickablePicture() {
    const [currentImage,changeCurrentImage] = useState(image1)

    const changeImage = () =>{
        if(currentImage === image1){
            changeCurrentImage(image2)
        } else if (currentImage === image2){
            changeCurrentImage(image1)
        }
    }

    return (
        <div>
            <img onClick={changeImage} src={currentImage} />
        </div>
    )
}