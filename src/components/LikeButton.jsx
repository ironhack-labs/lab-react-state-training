import {useState} from 'react'

function LikeButton() {

let [likets, setLikes] = useState(0)

const [ valorRegistrado,setvalorRegistrado ] = useState(null)

const handleClick = () => {

    setLikes (likets + 1)
} 
return (
    <button onClick={handleClick}>{likets}Likes </button>

);
   
};

export default LikeButton