import React, { useState, useContext } from "react";
import classes from "./Auth.module.css";
import { Link } from "react-router-dom";

function Auth() {
  return (
    <section className={classes.login}>
      <Link to="/">
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG3.png"
          alt="amazon"
        />
      </Link>
      <div className={classes.login_container}>
        <h1>Sign In</h1>
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button className={classes.login__SignInButton}>Sign In</button>
        </form>
        <p>
          By signing in, you agree to the Amazon Fake Clone conditions of use
          and sale. Please see our privacy notice, our cookies notice, and our
          interest-based ads notice.
        </p>
        <button>Create Your Amazon Account</button>
      </div>
    </section>
  );
}

export default Auth;
