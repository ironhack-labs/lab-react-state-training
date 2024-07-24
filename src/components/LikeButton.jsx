import { useState } from 'react'

function LikeButton(){
    const [likes,setCounter] = useState(0);
    return(
        <>
        <button onClick={()=>setCounter(likes+1)}>{likes} Likes </button>
        </>
    )
}

export default LikeButton;