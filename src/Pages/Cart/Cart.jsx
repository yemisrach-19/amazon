import React, { useContext } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/Product/ProductCard";
import CurrencyFormatter from "../../Components/CurrencyFormatter/CurrencyFormatter";
import { Link } from "react-router-dom";
import classes from "./Cart.module.css";

const Cart = () => {
  const [{ basket, user }, dispatch] = useContext(DataContext);
  const total = basket.reduce((amount, item) => item.price + amount, 0);
  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.Cart__container}>
          <h2>Hello</h2>
          <h3>your shopping basket</h3>
          <hr />
          {basket?.length == 0 ? (
            <p>Opps!No item in your cart</p>
          ) : (
            basket?.map((item, i) => {
              return (
                <ProductCard
                  key={i}
                  product={item}
                  renderDesc={true}
                  renderAdd={false}
                  flex={true}
                />
              );
            })
          )}
        </div>
        {basket?.length !== 0 && (
          <div className={classes.subtotal}>
            <div>
              <p>Subtotal({basket?.length}items)</p>
              <CurrencyFormatter amount={total} />
            </div>
            <span>
              <input type="checkbox" />
              <small>This order contain a gift </small>
            </span>
            <Link to="/payments">Continue to checkout</Link>
          </div>
        )}
      </section>
    </LayOut>
  );
};

export default Cart;
