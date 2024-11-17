import ClikablePicture from "./assets/components/clickablePicture/clickablePicture";
import Counter from "./assets/components/counter/counter";
import Dice from "./assets/components/dice/dice";
import discoButton from "./assets/components/discoButton/discoButton";
import LikeButton from "./assets/components/likeButton/likeButton";
import Panel from "./assets/components/ui/panel/panel";

function App() {
  return (
    <>
      <div className="d-flex p-3">
        <LikeButton></LikeButton>
        <LikeButton></LikeButton>
      </div>      
      
      <div  className = "container">
        <Counter></Counter>
      </div>

      <div>
        <ClikablePicture></ClikablePicture>
      </div>

      <div>
        <Dice></Dice>
      </div>

      <div>
        <discoButton></discoButton>
      </div>

    </>
  );
}

export default App;
