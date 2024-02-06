import {useState} from 'react';
import "./LikeButton.css";


function LikeButton() {

    const [counter,setCounter] = useState(0)  // State variable for the counter

    function increment() {
        setCounter(counter + 1);
    }

    return (

        <button className="button" onClick={() => increment(counter)}>{counter} Likes</button>

    )
}


export default LikeButton;

