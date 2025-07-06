import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import classes from "./Header.module.css";

function LowerHeader() {
  return (
    <div className={classes.lower__container}>
      <ul>
        <li>
          <MenuIcon />
          <p>All</p>
        </li>
        <li>Today's Deals</li>
        <li>Customer Service</li> {/* Corrected spelling of "Customer" */}
        <li>Registry</li>
        <li>Gift Cards</li>
        <li>Sell</li>
      </ul>
    </div>
  );
}

export default LowerHeader;
