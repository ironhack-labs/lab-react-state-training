import { useState } from 'react'
import maxGlases from '../assets/images/maxence-glasses.png'
import maxence from '../assets/images/maxence.png'
const ClickablePicture = () => {
	const [isClicked, setIsClicked] = useState(false)
	return (
		<div onClick={() => setIsClicked(!isClicked)}>
			{isClicked ? (
				<img src={maxGlases} width="300px" height="300px" />
			) : (
				<img src={maxence} width="300px" height="300px" />
			)}
		</div>
	)
}

export default ClickablePicture
