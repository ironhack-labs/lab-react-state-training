import "./App.css";
import ClickablePicture from "./components/ClickablePicture";
import LikeButton from "./components/LikeButton";

function App() {
  return (
    <div className="App">
      <LikeButton/> 
      <ClickablePicture/>
    </div>
  );
}

export default App;
