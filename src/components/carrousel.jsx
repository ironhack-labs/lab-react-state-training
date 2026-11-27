import {useState} from 'react'
let value = 0

function Carrousel({images}) {
    const [image,setImage] = useState(images[value])

    const changeToRigth = ()=>{
        if(value >= images.length - 1){
            value = 0;
            console.log(images.length)
        } else
        value++;
        setImage(images[value])
    }

    const changeToLeft = ()=>{
        if(value <= 0){
            value = images.length - 1;
            console.log(images.length)
        } else
        value--;
        setImage(images[value])
    }

    return(
    <>
        <div>
            <button onClick = {changeToLeft}>Left</button>
            <img src={image} alt="" />
            <button onClick = {changeToRigth}>Right</button>
        </div>
    </>
    )
}

export default Carrousel