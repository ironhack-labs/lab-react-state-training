import { useState } from "react"


function Counter({className = '', initialCountValue = 0, min = 0, max }) {
    const [count, setCount] = useState(() => {
        let initialValue = initialCountValue;
        if (min !== undefined)  {
            initialValue = Math.max(min, initialValue);
        }
        if (max !== undefined)  {
            initialValue = Math.min(max, initialValue);
        }
        return initialCountValue
    });

    const handleCountUp = () => {
        if (max === undefined || count < max) {
            setCount(count + 1);
        }
    }
            
    const handleCountDown = () => {
        if (min === undefined || count > min) {
            setCount(count - 1);
        }
    }

    let counterColor = '';
    if (count === max) {
        counterColor = 'text-success';
    } else if (count === min) {
        counterColor = 'text-danger';
    }
    
    return (
        <div
            className={`d-flex align-items-center justify-content-center border border-primary p-3 ${className}`}
            style={{ maxWidth: "200px", margin: "0 auto" }}
        >
            <button
                className="btn btn-primary btn-lg"
                onClick={handleCountDown}
                disabled={count === min}
            >
                -
            </button>
            <p
                className="mx-3 my-0 fs-2 fw-bold text-center"
                style={{ width: "50px" }}
            >
                {count}
            </p>
            <button
                className="btn btn-primary btn-lg"
                onClick={handleCountUp}
                disabled={count === max}
            >
                +
            </button>
        </div>
  );
}

export default Counter;