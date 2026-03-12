import { useState } from "react";

function Counter () {
    const [count, setCount] = useState(0);

    const changeCount = (diff) => {
        setCount(Math.max(count + diff, 0));
    }

    return (
        <div className="counter-container">
            <div className="counter-child counter-button" onClick={() => {changeCount(-1)}}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                </svg>
            </div>
            <div className="counter-child counter-text">
                {count}
            </div>
            <div className="counter-child counter-button" onClick={() => {changeCount(1)}}>
                <svg width="25px" height="25px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </div>
        </div>
    )
}

export default Counter;