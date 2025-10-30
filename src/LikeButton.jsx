import { useState } from "react"

function LikeButton() {
    // const [likeBtn, setLikeBtn] = useState({likesBtn01: 0,likesBtn02: 0})

    // const handleIncreaseBtn = (btn) => {
    //     setLikeBtn(prev => ({...prev, [btn]: prev[btn] + 1}))
    // }
    const [likesBtn01,setLikesBtn01] = useState(0)
    const[likesBtn02,setLikesBtn02] = useState(0)
    const handleIncreaseBtn = (likesBtn) => {
            likesBtn === 'likesBtn01'?             
            setLikesBtn01(likesBtn01 + 1):
            likesBtn === 'likesBtn02'?
            setLikesBtn02(likesBtn02 +1):
            null
    }
  return (
    <>
    <button onClick={()=>handleIncreaseBtn('likesBtn01')}>{likesBtn01} Likes</button>
    <button onClick={()=>handleIncreaseBtn('likesBtn02')} style={{marginLeft:'10px'}}>{likesBtn02} Likes</button>
    </>
  )
}

export default LikeButton
