import { useState } from 'react';

function LikeButton(){
 const [like, setLike] = useState(0);

 const increaseLike = () => {
    setLike(like + 1)
 };


return( <div> 
<button onClick={increaseLike}>Likes {like} </button>
</div>
)
}

export default LikeButton