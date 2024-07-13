import { useState } from "react"
import Counter from "./Counter";



function LikeButton() {

const [buttonValue, setButtonValue] = useState(0 )


  return (
    <div>


<Counter buttonValue={buttonValue} setButtonValue={setButtonValue} />


    </div>
  )
}

export default LikeButton