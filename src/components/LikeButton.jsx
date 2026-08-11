import { useState } from 'react';


function LikeBtn (){
    const [likeBtn, setLikeBtn] = useState(0);
    
    const handleClick = () => {
        setLikeBtn(likeBtn + 1)
  };
  return (
    <div>
        <button onClick={handleClick}>Like</button>
        <p>{likeBtn}</p>
    </div>
    
  )
}
export default LikeBtn;