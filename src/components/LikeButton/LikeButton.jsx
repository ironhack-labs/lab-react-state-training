import { useState } from 'react'
import './../LikeButton/LikeButton.css'

const LikeButton = () => {

  const [counter1, setCounter1] = useState(0)
  const [counter2, setCounter2] = useState(0)

  const incrementCounter1 = () => {
    setCounter1(counter1 + 1)
  }

  const incrementCounter2 = () => {
    setCounter2(counter2 + 1)
  }

  return (
    <div className='LikeButton'>
      <h3>Iteration 1</h3>

      <button className='counter1' onClick={incrementCounter1}>{counter1} Likes</button>

      <button className='counter2' onClick={incrementCounter2}>{counter2} Likes</button>

      <hr />

    </div>
  )
}

export default LikeButton