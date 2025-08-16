import {useState} from "react"

function LikeButton() {
    const [counter, setCounter] =useState(0);
  return (
    <>
        <button onClick={() => setCounter(counter+1)}>
        <span>{counter}</span> Likes
        </button>
    </>
  )
}

export default LikeButton