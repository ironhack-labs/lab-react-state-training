import {useState} from 'react'
import portrait from '../assets/images/maxence.png'
import portrait2 from '../assets/images/maxence-glasses.png'

function ClickablePicture() {

    const [image, setimage] = useState(portrait)

    const changeImg = () => {
        if (image === portrait) {
            setimage(portrait2)
        } else {
            setimage(portrait)
        }
    }


  return (
    <div>
      <img onClick={changeImg} src={image} alt="" />
    </div>
  )
}

export default ClickablePicture
