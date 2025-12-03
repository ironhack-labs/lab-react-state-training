import ClickablePicture from "./components/ClickablePicture";
import Counter from "./components/Counter";
import LikeButton from "./components/LikeButton";

function App() {
  return (
    <div >
      <h1> LAB | React Training</h1>

      <LikeButton/>
     
      <Counter />

      <ClickablePicture/>

     </div>
  );
}

export default App;
