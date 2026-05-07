import {useState} from 'react'
import Picture1 from '../assets/images/maxence.png'
import Picture2 from '../assets/images/maxence-glasses.png'

export default function ClickablePicture(){
    const [click,setClick] = useState(false)
    return (
        <div>
            <img 
                src={click ? Picture1 : Picture2}
                onClick={() => setClick(!click) }
            />
        </div>
    )
  
}
