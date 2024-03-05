import { useState } from "react";
import img1 from "../src/assets/images/maxence-glasses.png";
import img2 from "../src/assets/images/maxence.png";

export default function ClickablePicture() {
	const [currentImg, setCurrentImg] = useState(img1);

	return (
		<img
			src={currentImg}
			alt="Clickable"
			onClick={() => setCurrentImg(currentImg === img2 ? img1 : img2)}
			style={{ cursor: "pointer" }}
		/>
	);
}
