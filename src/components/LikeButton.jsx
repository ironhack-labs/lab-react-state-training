import { useState } from 'react'

export function LikeButton() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(count + 1);

return(
  <>
    <button onClick={handleIncrement} className='like-button'>{count} Likes</button>
  </>
)

}
