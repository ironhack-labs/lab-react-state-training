import React from 'react';

import { useState } from 'react';
const LikeButton = () => {
	const [count, setCount] = useState(0);
	return (
		<button className='count-container' onClick={() => setCount(count + 1)}>likedTimes {count}</button>
	);
};

export default LikeButton;
