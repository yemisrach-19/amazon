import React, { useContext, useState } from "react";
import classes from "./payment.module.css";
import LayOut from "../../Components/LayOut/LayOut";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/Product/ProductCard";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormatter from "../../Components/CurrencyFormatter/CurrencyFormatter";

export const Payments = () => {
  const [{ user, basket }] = useContext(DataContext);

  const total = basket.reduce(
    (amount, item) => item.price * item.amount + amount,
    0
  );
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);
  const [cardError, setCardError] = useState();
  const stripe = useStripe();
  const elements = useElements;
  const handleChange = (e) => {
    e.error?.mesage ? setCardError(e?.error?.message) : setCardError("");
  };
  return (
    <LayOut>
      {/*header*/}
      <div className={classes.payment_header}>CheckOut({totalItem})items</div>
      {/*payment*/}
      <section className={classes.payment}>
        {/*address*/}
        <div className={classes.flex}>
          <h3>Deliery Address</h3>
          <div>
            <div>{user?.email}</div>
            <div>123 React lane</div>
            <div>Ethiopia</div>
          </div>
        </div>
        <hr />
        {/*product*/}
        <div className={classes.flex}>
          <h3>Review items and delivery</h3>
          <div>
            {basket?.map((item) => (
              <ProductCard product={item} flex={true} />
            ))}
          </div>
        </div>
        <hr />
        {/*card*/}
        <div className={classes.flex}>
          <h3>payment method</h3>
          <div className={classes.payment__card__container}>
            <div className={classes.payment__details}>
              <form action="">
                {/*error*/}
                {cardError && (
                  <small style={{ color: "red" }}>{cardError}</small>
                )}
                <CardElement onChange={handleChange} />
                {/*price*/}
                <div className={classes.payment__price}>
                  <div>
                    <span style={{ display: "flex", gap: "10px" }}>
                      <p>Total Order |</p>
                      <CurrencyFormatter amount={total} />
                    </span>
                  </div>
                  <button>Pay Now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </LayOut>
  );
};
