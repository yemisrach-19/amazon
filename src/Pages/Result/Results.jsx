import React, { useState, useEffect } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import classes from "./Result.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../API/endPoint";
import ProductCard from "../../Components/Product/ProductCard";
import Loader from "../../Components/Loader/Loader";

function Results() {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { categoryName } = useParams();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${productUrl}/category/${categoryName}`)
      .then((res) => {
        console.log(res);
        setResults(res.data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [categoryName]);

  return (
    <LayOut>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category / {categoryName}</p>
        <hr />
        {isLoading ? (
          <Loader />
        ) : (
          <div className={classes.products_container}>
            {results?.map((product) => (
              <ProductCard
                key={product.id}
                renderAdd={true}
                product={product}
                renderDesc={false}
              />
            ))}
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Results;
