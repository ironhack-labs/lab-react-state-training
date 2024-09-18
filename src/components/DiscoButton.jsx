import { useState } from 'react'

function DiscoButton() {
  const [like, setLikes] = useState(0)
  const [color, setcolor] = useState(null)
  let colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']
  let colorRandon = Math.floor(Math.random() * colors.length)
  function handlecount() {
    setLikes(like + 1)
    setcolor(colors[colorRandon])
  }
  return (
    <div style={{ margin: '20px' }}>
      <button
        style={{ backgroundColor: color, color: 'white' }}
        onClick={handlecount}
      >
        {' '}
        {like} Likes
      </button>
    </div>
  )
}

export default DiscoButton
