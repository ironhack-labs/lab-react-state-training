//import React from "react";
//import LikeButton from "./components/LikeButton";
//import Counter from "./components/Counter";
//import ClickablePicture from "./components/ClickablePicture";

//const App = () => {
//return (
//<div>
// <ClickablePicture />
// </div>
// );
//};

//export default App;

//import React from "react";
//import ClickablePicture from "./components/ClickablePicture";

//function App() {
//return (
// <div>
//   <h1></h1>
//   <ClickablePicture />
// </div>
////);
//}

//export default App;

//import React from "react";
import Carousel from "./components/Carousel";

//function App() {
//return (
// <div>
//  <h1></h1>
// <Carousel
// images={[
// "https://randomuser.me/api/portraits/women/1.jpg",
// "https://randomuser.me/api/portraits/men/1.jpg",
// "https://randomuser.me/api/portraits/women/2.jpg",
// "https://randomuser.me/api/portraits/men/2.jpg",
//]}
///>
//</div>
//);
//}

//export default App;

import React from "react";
import Carousel from "./components/Carousel";
function App() {
  const images = [
    "https://randomuser.me/api/portraits/women/1.jpg",
    "https://randomuser.me/api/portraits/men/1.jpg",
    "https://randomuser.me/api/portraits/women/2.jpg",
    "https://randomuser.me/api/portraits/men/2.jpg",
  ];

  return (
    <div>
      <h1></h1>
      <Carousel images={images} />
    </div>
  );
}

export default App;
