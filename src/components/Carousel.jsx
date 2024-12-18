import { useState } from "react";

function Carousel(props){
    const {imagesCar} = props;
    const [image, setImage] = useState(imagesCar[3]); 
    var [index, setIndex] = useState(3);

    function setImageVal(){
        let count = 0;
        if(index===count){
            index=imagesCar.length;
        }
        setIndex(index-1);
        setImage(imagesCar[index-1]);
    }
    return(<div>
        <button onClick={()=>setImageVal()}>Left</button>
            <img src={image} alt="carousel image"/>
        <button onClick={()=>setImageVal()}>Right</button></div>)
}
export default Carousel