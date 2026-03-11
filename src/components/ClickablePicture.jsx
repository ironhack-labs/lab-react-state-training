import { useState } from "react";
import maxence from "../assets/images/maxence.png";
import CollMaxence from "../assets/images/maxence-glasses.png";

export function ClickablePicture() {
	const [showimage, setShowimage] = useState(true);

	const handleChangeImage = () => {
		setShowimage(!showimage);
	};

	return (
		<div className="ClickablePicture-container">
			<img
				onClick={handleChangeImage}
				src={showimage ? maxence : CollMaxence}
				alt="picture"
			/>
		</div>
	);
}
