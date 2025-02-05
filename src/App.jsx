import "./App.css";
import LikeButton from "./components/LikeButton";
import Counter from "./components/Counter";
import ClickablePicture from "./components/ClickablePicture";

function App() {
  return (
    <div className="App">
      
      <h1> LAB | React Training</h1>

      <LikeButton> </LikeButton>
      <Counter />
      <ClickablePicture> </ClickablePicture>
    </div>
  );
}

export default App;
