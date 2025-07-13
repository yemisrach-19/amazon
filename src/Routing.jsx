import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing/Landing.jsx";
import { Payments } from "./Pages/Payment/Payments.jsx";
import Orders from "./pages/Orders/Orders.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import Auth from "./Pages/Auth/Auth.jsx";
import Results from "./Pages/Result/Results.jsx";
import ProductDetail from "./Pages/ProductDetail/ProductDetail.jsx";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";


function Routing() {
  const stripePromise = loadStripe(
    "pk_test_51RUyiOD5oRDL7TDM1nhymJMZI4HqqpV0ofC6Bl6UyH6gAQTcAxYBd9I1MAVlnMraXJHn8RfFMZXUhMpbkBzBDYgY001jm1vDjJ"
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/Payments"
          element={
            <Elements stripe={stripePromise}>
              <Payments />
            </Elements>
          }
        />
        <Route path="/Orders" element={<Orders />} />
        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/products/:productId" element={<ProductDetail />} />

        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default Routing;
