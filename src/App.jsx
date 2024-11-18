import LikeButton from "./components/like-button/likeButton";
import Counter from "./components/counter/counter";
import ClickablePicture from "./components/ClickablePicture/clickablePicture";
import Dice from "./components/dice/dice";
function App() {
  return (
    <div>
      <LikeButton max={5}/>
      <LikeButton max={10}/>
     <Counter max={12}/>
     <ClickablePicture></ClickablePicture>
     <Dice></Dice>
    </div>
  );
}

export default App;
