import {useState} from 'react';

function DiscoButton(){
    const colors = ["purple", "blue", "green", "yellow", "orange", "red"];
    const [count1,setCount1] = useState(0);
    const [count2,setCount2] = useState(0);

    const [value1,setValue1] = useState(0);
    const [value2,setValue2] = useState(0);
    
    const currentColor1 = {
            backgroundColor : colors[value1]
        }
    const currentColor2 = {
            backgroundColor : colors[value2]
        }

    const updateButton1 = () =>{
         setCount1(count1 + 1);

         if(value1 > colors.length -2){
            setValue1(0)
            } else {setValue1(value1 + 1)}
    };

    const updateButton2 = () =>{
         setCount2(count2 + 1);
          if(value2 > colors.length -2){
            setValue2(0)
            } else {setValue2(value2 + 1)}
    };
    ;

    return (
        <>
            <button style = {currentColor1} onClick = {updateButton1}>{count1} Likes</button>
            <button style = {currentColor2} onClick  = {updateButton2}>{count2} Likes</button>
        </>
    )

}

export default DiscoButton