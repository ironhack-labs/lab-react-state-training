import { useState } from "react"

function LikeButton (){
  const [likeBtn, setLikeBtn] = useState(0)

  const [likeBtn2, setLikeBtn2]= useState(0)

  return (
    <div>
      <button onClick={() => setLikeBtn(likeBtn + 1)}>
        Likes: {likeBtn}
      </button>
      
      <button onClick={() => setLikeBtn2(likeBtn2 + 1)}>
        Likes: {likeBtn2}
      </button>
    </div>
  )
}

export default LikeButton