import { useState } from 'react';//import the state function
import maxence from '../assets/images/maxence.png'
import maxenceGlasses from '../assets/images/maxence-glasses.png'
function ClickablePicture() {

	const [picture, setPicture] = useState(false);

const currentImage = picture ? maxenceGlasses : maxence;//if picture is false show me maxenceGlasses else show me maxence.

	return (//open and close empty html tags to indicate that this is the children tag
		<>
			<img onClick={() => setPicture(!picture)} src={currentImage} alt="Pictures alternating" />
		</>
	)//the function Onclick is a function that will be executed when the image is clicked because it changes from false to true.
}

export default ClickablePicture;//export the function ClickablePicture