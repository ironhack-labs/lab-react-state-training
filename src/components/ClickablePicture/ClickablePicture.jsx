import { useState } from 'react'
import './../ClickablePicture/ClickablePicture.css'
import boyGlasses from './../../assets/images/maxence-glasses.png'
import boyNoGlasses from './../../assets/images/maxence.png'

const ClickablePicture = () => {
  const [hasGlasses, setHasGlasses] = useState(false)

  const appearGlasses = () => {
    setHasGlasses(!hasGlasses)
  }

  return (
    <div className='ClickablePicture'>
      <h3>Iteration 3</h3>


      <img src={hasGlasses ? boyGlasses : boyNoGlasses} alt="Picture" onClick={appearGlasses} />

      <hr />

    </div>
  )
}

export default ClickablePicture