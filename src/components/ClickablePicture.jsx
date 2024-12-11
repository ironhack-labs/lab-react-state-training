import imageOne from '../assets/images/maxence.png'
import imageTwo from '../assets/images/maxence-glasses.png'
import { useState } from 'react'

const ClickablePicture = ({initialImage = imageOne}) => {
 const [image, setImage] = useState(initialImage);
    const handleClick = () => {
        setImage((prevImage) => (prevImage === imageOne ? imageTwo : imageOne));

    };
    return (
        <div>
        <button
          type="button"
          onClick={handleClick}

        ><img src={image}></img>
        </button>
        </div>
      );
}
    export default ClickablePicture;