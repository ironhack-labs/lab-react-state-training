import { useState } from 'react';
import maxence from '../assets/images/maxence.png'
import maxenceGlasses from '../assets/images/maxence-glasses.png'

function Clickpic () {
    const [picture, setPicture] = useState(maxence);
    function Tooglepic () {
    if (picture === maxence) {
        setPicture(maxenceGlasses);
    }
    else {
        setPicture(maxence);
    }
 }
 return (
    <div>
         <img src= {picture} onClick={Tooglepic}/>
    </div> 
 )
}
export default Clickpic;