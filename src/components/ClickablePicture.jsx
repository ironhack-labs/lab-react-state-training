import { useState } from 'react';
import imagename1 from '../assets/images/maxence-glasses.png';
import imagename2 from '../assets/images/maxence.png';

export default function ClickablePicture(){
	
	const [image, setImage] = useState(imagename2);

	const handleClick = () => {
	  setImage(prevImage => (prevImage === imagename2 ? imagename1 : imagename2));
	};
	
	return (
		<img onClick={handleClick} src={image} alt="imagen" />
	)
}