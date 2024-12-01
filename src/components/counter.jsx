import { useState} from "react";

function Counter (){
    const [count, setCount] = useState (0);

    const increase = () => {
        setCount ((prevCount) => prevCount + 1); 
    }
    
    const decrease = () => {
        setCount ((prevCount) => prevCount - 1); 
    }
    return (
        <div
            className="d-flex flex-wrap justify-content-center align-items-center border border-primary gap-1 my-2"
            style={{ width: "150px", height: "70px" }}
        >
            <button
                type="button"
                onClick={decrease}
                className="btn btn-primary d-flex justify-content-center align-items-center "
                style={{ width: "40px", height: "40px" , borderRadius: "0"}}
            >
                -
            </button>
            <span className="mx-3 " style = {{fontSize: "2rem" }}>{count}</span>
            <button
                type="button"
                onClick={increase}
                className="btn btn-primary d-flex justify-content-center align-items-center"
                style={{ width: "40px", height: "40px", borderRadius: "0" }}
            >
                +
            </button>
        </div>
    );
}

export default Counter; 