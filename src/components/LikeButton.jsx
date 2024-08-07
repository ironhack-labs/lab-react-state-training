import { useState } from "react"

export default function LikeButton () {
  const [ counter, setCounter] = useState(0)


  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>{counter} likes</button>
    </div>
  )

}
