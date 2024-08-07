import React, {useState} from "react";

function LikeButton() {
    const [likes, setLikes] = useState(0);

    const increaseLikes= () => {
      setLikes(likes + 1);
    };
    
    const decreaseLikes = () => {
          setLikes(Math.max(likes - 1, 0));
        }
    
    return ( 
        <section className="likesContainer">
        <button onClick={increaseLikes}>+</button>
        <p>{likes}</p>
        <button onClick={decreaseLikes}>-</button>

        </section>
        
    );
}

export default LikeButton