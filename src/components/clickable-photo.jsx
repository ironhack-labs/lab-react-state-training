import { useState} from "react";

function ClickablePhoto (){
    const [clickOn, setClickOn] = useState(0);  
    
    const handleClick = () => {
        setClickOn ((prevClickOn) => (prevClickOn === 0 ? 1 : 0));
    };

    return(
        <div onClick = {handleClick} >
            <img src = {
                clickOn === 0 
                 ? "/src/assets/images/maxence.png"
                 : "/src/assets/images/maxence-glasses.png" 
                }
            alt = "Maxence"
            style = {{width: "150px", height: "auto", cursor: "pointer"}}
            />

        </div>

        );
}

export default ClickablePhoto; 