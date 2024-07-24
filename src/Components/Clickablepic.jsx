import { useState } from "react"
import Image1 from '../assets/images/maxence.png'
import Image2 from '../assets/images/maxence-glasses.png'


function Clickablepic() {

    const [click, setClick] = useState(Image1);
    
    return(
        <>
        <img onClick={()=> setClick (Image2)} src={click} alt="" />
        
        </>
    )
    
}

export default Clickablepic