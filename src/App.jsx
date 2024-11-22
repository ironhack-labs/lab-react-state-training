import "./App.css";
import LikeButton from "./components/LikeButton";
import Counter from "./components/Counter";
import ClickablePicture from "./components/ClickablePicture";
import Dice from "./components/Dice";
import DiscoButton from "./components/DiscoButton";

function App() {
  return (
    <div className="App ms-3 mb-2">
      {" "}
      {/*PONGO MS-3 PARA TENER UN "MARGIN START" Y NO QUEDEN LOS ELEMENTOS PEGADOS A LA PARTE IZQUIERDA DE LA PANTALLA*/}
      <h1> LAB | React Training</h1>
      <LikeButton />
      <br />
      <br />
      <Counter />
      <br />
      <ClickablePicture />
      <br />
      <Dice />
      <br />
      <DiscoButton />
    </div>
  );
}

export default App;
