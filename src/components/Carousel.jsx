import { useState } from "react"


export const Carousel = (props) => {
   const {images} = props
   const [count, setCount] = useState(0)
  return (
    <>
    <div className="carroussel">
        <button onClick={() => {
            
            if(count - 1 >= 0){
                setCount(count - 1)
            }else{
                setCount(images.length - 1)
            }
        }}>previous</button>
        <img src={images[count]} alt="" />
        <button onClick={() => {
            
            if(count + 1 < images.length){
                setCount(count + 1)
            }else{
                setCount(0)
            }
        }}>next</button>
        </div>
    </>
  )
}
