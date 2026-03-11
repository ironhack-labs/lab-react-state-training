import { useState } from "react";

export function Carousel({ images }) {
	const [index, setIndex] = useState(0);

	const goRight = () => {
		setIndex((index + 1) % images.length);
	};

	const goLeft = () => {
		setIndex((index - 1 + images.length) % images.length);
	};

	return (
		<div>
			<button onClick={goLeft}>Left</button>

			<img src={images[index]} alt="carousel" width="200" />

			<button onClick={goRight}>Right</button>
		</div>
	);
}
