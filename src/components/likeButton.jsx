import { useState } from "react";

function LikeButton(){
    let [count, setCount] = useState(0);
    function incLikes(){
        setCount(count + 1);
    }
return(<>
<button onClick={incLikes}>{count} Likes</button></>)
}
export default LikeButton;