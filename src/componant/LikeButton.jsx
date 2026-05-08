import {useState} from 'react'
export default function LikeButton() {
  const [num, setNum] = useState(0)
  const [num2, setNum2] = useState(0)
  
  return(
    <div>
     <button onClick={() => setNum(num +1)}>{num} Likes </button>
     <button onClick={() => setNum2(num2 +1)}>{num2} Likes </button>
     
    </div>
  )
}
