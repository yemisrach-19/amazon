import React from "react";
import Carousel from "../../Components/Carousel/Carousel";
import Category from "../../Components/Category/Category";
import Product from "../../Components/Product/Product";
import LayOut from "../../Components/LayOut/LayOut";

const Landing = () => {
  return (
    <div>
      <LayOut>
        <Carousel />
        <Category />
        <Product />
      </LayOut>
    </div>
  );
};

export default Landing;
