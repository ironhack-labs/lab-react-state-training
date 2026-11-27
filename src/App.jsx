import "./App.css";
import LikeButtons from './components/like-buttons';
import Counter from "./components/counter";
import ClickablePicture from './components/clickablePicture'
import Dice from "./components/dice";
import DiscoButton from "./components/disco-button";
import Carrousel from "./components/carrousel";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <LikeButtons/>
      <Counter/>
      <ClickablePicture/>
      <Dice/>
      <DiscoButton/>
      <Carrousel images={[
    "https://randomuser.me/api/portraits/women/1.jpg",
    "https://randomuser.me/api/portraits/men/1.jpg",
    "https://randomuser.me/api/portraits/women/2.jpg",
    "https://randomuser.me/api/portraits/men/2.jpg"
  ]}
/>
    </div>
  );
}

export default App;
