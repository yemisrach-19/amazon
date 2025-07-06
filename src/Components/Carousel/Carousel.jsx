import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import classes from "./Carousel.module.css";
import { img } from "./img/data.js";

function CarouselEffect() {
  return (
    <div className={classes.carouselContainer}>
      <Carousel
        showArrows={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000} // Optional: Adjust autoplay interval
      >
        {img.map((image, index) => (
          <div key={index} className={classes.imgWrapper}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className={classes.carouselImage}
            />
          </div>
        ))}
      </Carousel>
      <div className={classes.overlay}></div>
    </div>
  );
}

export default CarouselEffect;
