import { useState } from 'react';//import the state function

<Carousel
	images={[
		"https://randomuser.me/api/portraits/women/1.jpg",
		"https://randomuser.me/api/portraits/men/1.jpg",
		"https://randomuser.me/api/portraits/women/2.jpg",
		"https://randomuser.me/api/portraits/men/2.jpg"
	]}
/>

function Carousel({ images }) {

	const [picture, setPicture] = useState(0);

	const nextPicture = () => {
		if (picture < images.length - 1) {
			setPicture(picture + 1);
		}
	};

	const previousPicture = () => {
		if (picture > 0) {
			setPicture(picture - 1);
		}
	};

	return (
		<>
			<button onClick={previousPicture}>Left</button>
			<img src={images[picture]} alt="array of human faces" />
			<button onClick={nextPicture}>Right</button>
		</>
	)
}

export default Carousel;//export the function Carousel