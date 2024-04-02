import "./App.css";
import ClickablePicture from "./components/ClickablePicture";
import LikeButton from "./components/LikeButton";
import Counter from "./components/counter";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <LikeButton />
      <LikeButton />
      <Counter />
      <ClickablePicture />	
      <Counter />
      
    </div>
  );
}

export default App;
