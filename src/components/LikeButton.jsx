import react, {useState} from "react";

function LikeButton(){

    const[counter, setCounter] = useState(0);

    const increaseCount = () => {
        const newValue = counter + 1;
        setCounter(newValue)
    };

    return <button onClick={increaseCount}>
        {counter} likes
        </button>
};

export default LikeButton;