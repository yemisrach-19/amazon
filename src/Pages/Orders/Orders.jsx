import React, { useContext, useEffect, useState } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import classes from "./Orders.module.css";
import { db } from "../../Utility/fireBase";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/Product/ProductCard";

const Orders = () => {
  const [{ user }] = useContext(DataContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      const unsubscribe = db
        .collection("users")
        .doc(user.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          const ordersData = snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }));
          setOrders(ordersData);
        });

      return () => unsubscribe(); // Cleanup on unmount
    } else {
      setOrders([]);
    }
  }, [user]); // Add user as a dependency

  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.orders__container}>
          <h2>Your Orders</h2>
          {orders.length === 0 && (
            <div style={{ padding: "20px" }}>You don't have orders yet.</div>
          )}
          {/* Render orders items */}
          {orders.map((eachOrder) => (
            <div key={eachOrder.id}>
              <hr />
              <p>Order ID: {eachOrder.id}</p>
              {eachOrder.data.basket?.map((order) => (
                <ProductCard flex={true} product={order} key={order.id} />
              ))}
            </div>
          ))}
        </div>
      </section>
    </LayOut>
  );
};

export default Orders;
