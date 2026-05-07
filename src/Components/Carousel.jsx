import { useState } from 'react'

function Carousel(props){

    const [num, setNum] = useState(0);

    function handleLeft(){
        if(num > 0){
            setNum(num - 1);
        }

    }

    function handleRight(){
        if(num < 3){
            setNum(num + 1);
        }
    }


    return(
        <div>
            <button type='button' onClick={handleLeft}>Left</button>
            <img src={props.image[num]} alt='image'/>
            <button type='button' onClick={handleRight}>Right</button>
        </div>
    );
}

export default Carousel