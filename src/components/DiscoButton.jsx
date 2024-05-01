import { useState } from "react"

export default function DiscoButton() {
 const [likes, setLikes] =  useState(0)
 const colors = ["purple", "blue", "green", "yellow", "orange", "red"];
 const [index, setIndex] = useState(0)

 const handleClick = () => {
  setLikes( prev => prev+=1 );
  setIndex (prev => (prev+1) % 6 )
  colors
 }

return( 
    <button  onClick={handleClick} style={{backgroundColor: colors[index] }} >
      {likes} likes
    </button>
  )
}