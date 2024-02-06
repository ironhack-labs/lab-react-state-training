import {useState} from 'react';

function Carousel () {


	const images = [
		'https://randomuser.me/api/portraits/women/1.jpg',
		'https://randomuser.me/api/portraits/men/1.jpg',
		'https://randomuser.me/api/portraits/women/2.jpg',
		'https://randomuser.me/api/portraits/men/2.jpg'
		];

	const [count, setCount] = useState(0);

	const handleClick = (x) => {

		setCount(count + x);


	}

	return (

		<div>
			<button onClick={() => {handleClick(-1)}}>Left</button>
			<img src={images[count]} />
			<button onClick={() => {handleClick(1)}}>Right</button>
		</div>
	)


}

export default Carousel;