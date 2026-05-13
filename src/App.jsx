import "./App.css";
import "./components/like-components/like-components.jsx"
import LikeButton from "./components/like-components/like-components.jsx";
import Counter from "./components/counter/counter.jsx";
import ClickeablePicture from "./components/clickable-picture/clickeable-picture.jsx";
import Dice from "./components/dice/dice.jsx";
import DiscoButton from "./components/disco-button/disco-button.jsx";
import Carousel from "./components/carousel/carousel.jsx";




function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <LikeButton/>
      <LikeButton/>

      <Counter/>

      <ClickeablePicture /> 
      
      <Dice />

      <DiscoButton /> 

      <Carousel
        images={[
          "https://media.istockphoto.com/id/2172317014/es/foto/hombre-hispano-feliz-trabajando-en-computadora-port%C3%A1til-en-casa.jpg?s=2048x2048&w=is&k=20&c=0tzIHQcLm5TILc2rfdLVoc3qdnnVdSoNNfwlgtayGqs=",
          "https://media.istockphoto.com/id/1846538503/es/foto/mujer-caminando-en-la-acera-en-el-entorno-urbano-y-hablando-por-tel%C3%A9fono.jpg?s=2048x2048&w=is&k=20&c=boeyiaKRBL8LhgEthWfA8VbkhPUQACJlv9ca7YAYjDk=",
          "https://media.istockphoto.com/id/1364387823/photo/cheerful-young-woman-taking-a-selfie-next-to-the-sea.jpg?s=2048x2048&w=is&k=20&c=NXrWtKXff15_gNkCnn00AlfVpYNZRLFutVLO-kK8dDo=",
          "https://media.istockphoto.com/id/2148975617/photo/woman-jumping-high-after-successful-job-interview.jpg?s=2048x2048&w=is&k=20&c=FrltdFNdmgY8ygA5XEN1vNNCxdVMrO6eru50P8Lv3Mg="
        ]}
      />


    </div>
  );
}

export default App;
