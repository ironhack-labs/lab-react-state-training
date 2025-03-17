import React,{useState} from "react"

export const LikeButton = () => {
  
  const [ count, setCount] = useState(0)
  
  return (
    <>
    <button onClick={() => setCount(count + 1)}>{count} Likes</button>
    </>
  )
}
