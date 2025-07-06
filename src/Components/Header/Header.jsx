import React from "react";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LowerHeader from "./LowerHeader";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section>
      <div className={classes.header__container}>
        {/* Logo */}
        <div className={classes.logo__container}>
          <Link to="/">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="Amazon logo"
              style={{ width: "100px", height: "auto" }}
            />
          </Link>
          <div className={classes.delivery}>
            {/* Delivery */}
            <span>
              <LocationOnIcon />
            </span>
            <div>
              <p>Delivered to</p>
              <span>Ethiopia</span>
            </div>
          </div>
        </div>

        {/* Search Section */}
        <div className={classes.search}>
          <select name="categories" id="category-select">
            <option value="">All</option>
          </select>
          <input type="text" />
          <SearchIcon style={{ fontSize: 25 }} />
        </div>

        {/* Right Side Links */}
        <div className={classes.order__container}>
          <Link to  ="" className={classes.language}>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png"
              alt="United States Flag"
            />
            <select name="language" id="language-select">
              <option value="">EN</option>
            </select>
          </Link>

          {/* Sign In */}
          <a href="">
            <p>Sign In</p>
            <span>Account & Lists</span>
          </a>

          {/* Returns & Orders */}
          <Link to ="/Orders">
            <p>Returns</p>
            <span>& Orders</span>
          </Link>

          {/* Cart */}
          <Link to  ="/cart" className={classes.cart}>
            <ShoppingCartCheckoutIcon style={{ fontSize: 35 }} />
            <span>0</span>
          </Link>
        </div>
      </div>
      <LowerHeader /> 
    </section>
  );
};

export default Header;
