
const Likes = ({likes, setLikesState}) => {
    const handleClick = () => {
        setLikesState(Likes => Likes + 1);
    }

  return (
    <div className="likes-button">
      <button onClick={handleClick}>{likes} Likes</button>
    
      <button onClick={handleClick}>{likes} Likes</button>
    </div>   
  )
}
export default Likes
