import { useState } from 'react';//import the state function

function LikeButton() {
	const [countLikes, setCountLikes] = useState(0);


	return (//open and close empty html tags to indicate that this is the children tag
		<>
			<button onClick={()=>setCountLikes(countLikes + 1)}>{countLikes} Likes</button>
		</>
	)//the function Onclick is a function that will be executed when the button is clicked, however, the function setCount is a function that can create eternal loop even though you put the event onclick, therefore ()=> we put a ghost fucntion to avoid that loop.
}

export default LikeButton;//export the function LikeButton
