import React from "react";
import { categoryInfos } from "./CategoryCollection";
import CategoryCard from "./CategoryCard";
import classes from "./Category.module.css";

function Category() {
  return (
    <div className={classes.category_container}>
      {categoryInfos.map((infos) => (
        <CategoryCard key={infos.name} data={infos} />
      ))}
    </div>
  );
}

export default Category;
