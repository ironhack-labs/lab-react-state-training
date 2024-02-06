import { useState } from "react";

function Carousel(props) {
    const { images } = props;
    const [currentImgIndex, setCurrentImageIndex] = useState(0);
  
    const handleLeft = () => {
      if (currentImgIndex > 0) {
        setCurrentImageIndex(currentImgIndex - 1);
      } else {
        setCurrentImageIndex(images.length - 1);
      }
    };
  
    const handleRight = () => {
      if (currentImgIndex + 1 < images.length) {
        setCurrentImageIndex(currentImgIndex + 1);
      } else {
        setCurrentImageIndex(0);
      }
    };
  
    return (
      <div>
        <button onClick={handleLeft}>Left</button>
        <img src={images[currentImgIndex]} alt="carousel" />
        <button onClick={handleRight}>Right</button>
      </div>
    );
  }
  
  export default Carousel;



/*
function Carousel (prop) {

    let [index, setCurrentIndex] = useState(0);

    function backPic () {
        index = prop.images.length;
        const newIndex = index - 1;
        setCurrentIndex(newIndex < 0 ? prop.images.length - 1 : newIndex);
        }
    

    function nextPic () {
        index = prop.images.length;
        const newIndex = index + 1;
        setCurrentIndex(newIndex >= length ? 0 : newIndex)

        }
    
     

    return (
        <div>
             <button onClick={backPic} className="images-button">Left</button>
            <img src={prop.images[newIndex]} alt="" />
            <button onClick={nextPic} className="images-button">Right</button>
        </div>

    )
}

export default Carousel; */