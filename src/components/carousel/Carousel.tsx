import Carousel from "react-bootstrap/Carousel";

import "./CarouselStyles.css";


import { data } from "../../infrastructure/headerImages";

function CarouselComponet() {
  return (
    <Carousel data-bs-theme="dark" className="carousel" fade>
     {
      data.map((item, index) => (
        <Carousel.Item key={index} className="carousel-item">
          <img className="d-block w-100" src={item.img} alt={`Image ${index +1}`}/>
        </Carousel.Item>
      ))
     }
    </Carousel>
  );
}

export default CarouselComponet;
