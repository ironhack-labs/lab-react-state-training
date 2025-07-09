import react, {useState} from "react";

function Counter(){
    const[counter, setCounter] = useState(0);

    const increaseCount = () => {
        const newValue = counter + 1;
        setCounter(newValue)
    };

    const decreaseCount = () => {
        const newValue = counter - 1;
        setCounter(newValue)
    };

    return(
    <div className="counterBtn">
        <button onClick={increaseCount}> + </button>
        <h1>{counter}</h1>
        <button onClick={decreaseCount}> - </button>
    </div>
    );
};

export default Counter;