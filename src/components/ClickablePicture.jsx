import React, { useState } from 'react';
import maxence from '../assets/images/maxence.png';
import maxence_glasses from '../assets/images/maxence-glasses.png';
const ClickablePicture = () => {
	const [image, setImage] = useState(maxence);

	const changeImage = () => {
		let value = image;
		if (value === maxence) {
			setImage(maxence_glasses);
		} else {
			setImage(maxence);
		}
	};
	return (
		<div>
			<img onClick={changeImage} src={image} alt="" />
		</div>
	);
};

export default ClickablePicture;
