import {useState} from 'react';

function DiscoButton () {
	
	const colours = [`purple`, `blue`, `green`, `yellow`, `orange`, `red`];

	const [count, setCount] = useState(0);

	const handleClick = () => {

		if (count > 4) {
			setCount(0);
		} else {
			setCount(count + 1);
		}

	}

	return(

		<button onClick={handleClick} style={{backgroundColor: colours[count]}}>DiscoButton</button>
		
	)

}

export default DiscoButton;