import './ClickPic.css'
import img1 from './../../assets/images/maxence.png'
import img2 from './../../assets/images/maxence-glasses.png'
import { useState } from 'react'

const ClickPic = () => {

    const [toggled, setTogled] = useState(true)

    const toggleImage = () => setTogled(!toggled)
    return (

        <div className='ClickPick'>
            <img onClick={toggleImage} src={toggled ? img1 : img2} alt="crazyy" />



            {/* {toggled && <img src={img1} alt='normal' />} */}

        </div>
    )


}

export default ClickPic

{/* <button onClick={toggleImage}>bummmm</button> */ }