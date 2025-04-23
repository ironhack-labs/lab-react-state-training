import { useState } from "react";

function LikeButton() {
    const colors = ["purple", "blue", "green", "yellow", "orange", "red"];
	const [like, setLike] = useState(0);
    const [backgroundColor, setBackgroundColor] = useState("");
	const increaseLike = () => {
        const randomIndex = Math.floor(Math.random() * colors.length);
        setBackgroundColor(colors[randomIndex]);
		setLike(like + 1);
	};
	return (
		<div key={like}>
			<button onClick={increaseLike} 
            style={{backgroundColor, color: "black", padding: "10px 20px", border: "none", borderRadius: "5px"}}>{like} 👍🏽</button>
		</div>
	);
}
export default LikeButton;
