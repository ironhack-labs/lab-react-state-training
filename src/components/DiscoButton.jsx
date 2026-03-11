import { useState } from "react";

export function DiscoButton() {
	const [likes, setLikes] = useState(0);
	const [colorIndex, setColorIndex] = useState(0);

	const colors = ["purple", "blue", "green", "yellow", "orange", "red"];

	const handleClick = () => {
		setLikes(likes + 1);
		setColorIndex((colorIndex + 1) % colors.length);
	};

	return (
		<button
			onClick={handleClick}
			style={{ backgroundColor: colors[colorIndex] }}
		>
			{likes} Likes
		</button>
	);
}
