import {useState} from 'react'

function LikeButton(){
    const [counter, setCounter] = useState(0);

    function updateCounter(){
        setCounter(counter +1)
    }
    
    return <button onClick={updateCounter}>{counter} Likes</button>
}

export default LikeButton;