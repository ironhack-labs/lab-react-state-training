import { useState } from "react";
import shadesImage from "../assets/images/maxence-glasses.png";
import noShadesImage from "../assets/images/maxence.png";

export default function ClickablePicture() {
	const [picState, setPicState] = useState(noShadesImage);
	
    const toggleImage = () => {
        if (picState === noShadesImage) {
            setPicState(shadesImage)
        } else {
            setPicState(noShadesImage)
        }
    }
  

	return (
		<div className="shade-image">
			<img onClick={() => {toggleImage()}} src={picState} alt="" />
		</div>
	);
}
