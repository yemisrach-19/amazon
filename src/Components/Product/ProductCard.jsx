import React from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormatter from "../CurrencyFormatter/CurrencyFormatter";
import classes from "./Product.module.css";
import {Link} from 'react-router-dom'

function ProductCard({ product }) {
  const { id, image, title, rating, price  } = product;
  return (
    <div className={`${classes.card__container}`}>
      <Link to={`/products/${id}`}>
        <img src={image} alt=""className={classes.img_container} />
      </Link>
      <div>
        <h3>{title}</h3>
        <div className={classes.rating}>
          <Rating value={rating?.rate} precision={0.1} />
          <small>{rating?.count}</small>
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
