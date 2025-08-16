import LikeButton from "./components/LikeButton";
import Counter from "./components/Counter";
import ClickablePicture from "./components/ClickablePicture";
import Dice from "./components/Dice";


function App() {
  return (
    <>
      <div className="App">
         <LikeButton />
         <Counter/>
         <ClickablePicture/>
         <Dice/>
      </div>
     
    </>
  );
}

export default App;
