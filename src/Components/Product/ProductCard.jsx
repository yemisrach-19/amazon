import React from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormatter from "../CurrencyFormatter/CurrencyFormatter";
import classes from "./Product.module.css";

function ProductCard({ product }) {
  const { id, image, title, rating, price, description } = product;
  return (
    <div className={`${classes.card__container}`}>
      <a href="">
        <img src={image} alt={title} className={classes.img_container} />
      </a>
      <div>
        <h3>{title}</h3>
        <div className={classes.rating}>
          <Rating value={rating.rate} precision={0.1} />
          <small>{rating.count}</small>
        </div>
        <div>
          <CurrencyFormatter amount={price} />
        </div>

        <button className={classes.button}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
