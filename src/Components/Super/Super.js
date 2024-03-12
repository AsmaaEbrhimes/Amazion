
import React from 'react';
import img1 from "../images/happy-children-superheroes-playing-home_411285-1828.jpg";
import img2 from "../images/happy-smiling-kid-shopping-child-with-cart_624325-8.jpg";
import img3 from "../images/woman-posing-with-daughter-after-shopping-carefree-preteen-girl-sitting-store-cart_197531-13710.jpg"
import img4 from "../images/mother-daughter-shopping-supermarket-choosing-products_169016-6401.jpg"
import Carousel from 'react-bootstrap/Carousel';
import "./Super.css";

function Super() {
  return (
    <Carousel className="Carousel" interval={1000}>
      <Carousel.Item>
        <img
          className="img_slider"
          src={img1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img_slider"
          src={img2}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img_slider"
          src={img3}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img_slider"
          src={img4}
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Super;
