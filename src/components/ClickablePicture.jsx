import { useState } from "react";


function ClickablePicture() {
    const pictures = ["/src/assets/images/maxence.png", "/src/assets/images/maxence-glasses.png"] 
    const [count, setCount] = useState(0);
    function handleClick() {
        if (count == 0){
            setCount(count + 1);
        } else {
            setCount(count - 1);
        }
    }
  return (
    <img src={pictures[count]} onClick={handleClick}/>
  );
}

export default ClickablePicture;
