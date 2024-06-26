import { useState } from "react";
import { Carousel } from "react-responsive-carousel";

const Carrousel = ({images}) => {
    return (
        <Carousel>
          <div>
            <img src="image1.jpg" alt="Image 1" />
          </div>
          <div>
            <img src="image2.jpg" alt="Image 2" />
            <p className="legend">Caption 2</p>
          </div>
          <div>
            <img src="image3.jpg" alt="Image 3" />
            <p className="legend">Caption 3</p>
          </div>
        </Carousel>
      );
    }

export default Carrousel;