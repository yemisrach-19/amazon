 import React from "react";
import numeral from "numeral";

export const CurrencyFormatter = ({ amount }) => {
  const formattedAmount = numeral(amount).format("$0,0.00");
  return <div>{formattedAmount}</div>;
};

export default CurrencyFormatter;
