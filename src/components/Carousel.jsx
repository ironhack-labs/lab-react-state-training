import { useState } from "react";
export default function Carousel() {
	const images = [
		"https://randomuser.me/api/portraits/women/1.jpg",
		"https://randomuser.me/api/portraits/men/1.jpg",
		"https://randomuser.me/api/portraits/women/2.jpg",
		"https://randomuser.me/api/portraits/men/2.jpg",
	];
	const [imagen, setImagen] = useState(images[0]);
	const [count, setCount] = useState(0);

	const back = () => {
		setCount(count - 1);
		count >=0? setImagen(images[count]): setCount(images.length-1);
	};
	const next = () => {
	 setCount(count + 1);
	count <= images.length-1? setImagen(images[count]): setCount(0);
		// if (count > 0) 
	};
	return (
		<>
			<button onClick={back}> Back</button>
			<img src={imagen} alt="" srcset="" />
			<button onClick={next}>Next</button>
		</>
	);
}
