import  {useState} from "react"
import glasses from '../assets/images/glasses.png'
import tipogafas from '../assets/images/maxence-glasses.png'
import tipo from '../assets/images/maxence.png'

function ClickablePicture (){
    const [picture, setGlasses] = useState(tipogafas)

    
        const handleGlasses = () => {
            setGlasses(picture === tipogafas ? tipo : tipogafas); 
          };

        
    
        
        return(
            <div>
          <img src={picture} onClick={handleGlasses}/>
          
      </div>
  )
}


export default ClickablePicture