import LikeButton from "./LikeButton";
import { useState } from "react";

const Counter = () => {

    const [likeCount, setLikeCount] = useState(0);
    console.log(likeCount)

    return (
        <div className='div-pretty' >
            <button type="button" id="increment" onClick={() => {
                setLikeCount(likeCount + 1)
            }
            }> +</button>

            <div> {likeCount} </div>
            <button type="button" id="decrement" onClick={() => {
                setLikeCount(likeCount - 1)
            }
            }> - </button>
        </div>
    );

}

export default Counter;