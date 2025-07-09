import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing/Landing.jsx";
import Payment from "./Pages/Payment/Payments.jsx";
import Orders from "./pages/Orders/Orders.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import Auth from "./Pages/Auth/Auth.jsx";
import Results from "./Pages/Result/Results.jsx";
import ProductDetail from "./Pages/ProductDetail/ProductDetail.jsx";

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Signup" element={<Auth />} />
        <Route path="/Payments" element={<Payment />} />
        <Route path="/Orders" element={<Orders />} />
        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/products/:productId" element={<ProductDetail />} />

        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default Routing;
