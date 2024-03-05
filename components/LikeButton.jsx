export default function LikeButton({ setLike, like }) {
	return (
		<button className="btnLike" onClick={() => setLike(like + 1)}>
			{like} Likes
		</button>
	);
}
