function Button({className = '', text}) {
    return(
       <>
         <button className={"btn btn-primary btn-sm"}>{text}</button>
       </>                 
    )
}
export default Button;