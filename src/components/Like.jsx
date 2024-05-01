import { useState } from "react";

const LikeButton = () => {
    const [likes, countLikes] = useState(0);

    const handleLike = () => {
        countLikes(likes + 1);
    };

    return(
        <button onClick={handleLike}>
            {likes} {likes === 1 ? 'Like' : 'Likes'}
        </button>
    );

    
};

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const incrementCounter = () => {
        setCounter(counter +1);
    };
    const decrementCounter = () => {
        if (counter >0){
            setCounter(counter-1);
        }
    }
}
return (
    <div>
        <p>Counter: {counter}</p>
      <button onClick={incrementCounter}>+</button>
      <button onClick={decrementCounter}>-</button>
    </div>
)

export default LikeButton;
export default Counter;