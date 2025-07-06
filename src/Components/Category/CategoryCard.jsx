import React from "react";

import classes from "./Category.module.css";

function CategoryCard({ data }) {
  return (
    <div className={classes.category}>
      <a href="">
        <span>
          <h4>{data.title}</h4>
        </span>
        <img src={data.imgLink} alt="" />
        <p>Shop now</p>
      </a>
    </div>
  );
}

export default CategoryCard;
