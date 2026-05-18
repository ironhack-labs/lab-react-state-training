


export default function LikeButton (){

const [likes, setLikes] = useState(0)
const incentLikes = () => {

setLikes(likes + 1)
}

return (
<>
<button onClick={incentLikes}>
{likes} Likes
</button>
</>
)

}