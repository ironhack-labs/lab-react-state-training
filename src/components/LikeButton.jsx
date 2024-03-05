

  const LikeButton = ({likes, setLike}) => {
  
  const addLike = () => {
    setLike(likes+1)
  }
    return (
    <div>
      <button onClick={addLike}> {likes} likes</button>
    </div>
  )
}

export default LikeButton
