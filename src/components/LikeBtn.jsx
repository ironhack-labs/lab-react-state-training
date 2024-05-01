import {useState } from "react";

function LikeBtn(){
    const [like, setLike] = useState(0);

    const increaseLikes = () => {
        setLike(like + 1);
    };

    return (
     <button onClick={increaseLikes}>Likes {like} </button>
      );

}

export default LikeBtn;