import { useState } from "react"

function LikeButton({}) {
    const [isClicked, setIsClicked] = useState(false);
    const [likes, setLikes] = useState(0);
    
    const increaseLike = () => {
        setLikes(likes + 1);
        setIsClicked(!isClicked);
    }

  return (
    <section className="iteration"> 
        <header className="header">Iteration 1 | LikeButton</header>
        <button className="likeButton" onClick={increaseLike}>
        {likes} {isClicked ? "Likes" : "Likes"} 
        </button>
    </section>
  )
}

export default LikeButton