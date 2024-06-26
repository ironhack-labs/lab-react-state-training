import { useState } from "react";


const LikeButton = () => {
   const [count, setCount] = useState(0);
return (
<button onClick={() => setCount(count + 1)}> {count} likes </button>
)
}

export default LikeButton;