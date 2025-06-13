const Button = ({children,className,id,style, onClick}) => {
  return (
    <button className={className && className} id={id && id} style={style && style} onClick={onClick}>{children}</button>
  )
}
export default Button