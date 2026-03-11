import { useState } from "react";

export function LikeButton() {
	const [count, setCount] = useState(0);

	const increment = () => {
		setCount(count + 1);
	};

	return (
		<div>
			<button onClick={increment}>{count} Likes</button>
		</div>
	);
}
