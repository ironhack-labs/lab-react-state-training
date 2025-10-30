import { useState } from 'react'

const LikeButton = () => {
	const [likes, setLikes] = useState(0)

	return <button onClick={() => setLikes((p) => p + 1)}>{likes} Likes</button>
}

export default LikeButton
