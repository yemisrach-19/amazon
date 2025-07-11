import React, { useState, useContext } from "react";
import classes from "./Auth.module.css";
import { Link } from "react-router-dom";
import { auth } from "../../Utility/fireBase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { DataContext } from "../../Components/DataProvider/DataProvider";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [{ user }, dispatch] = useContext(DataContext);
  console.log(user);

  const authHandler = async (e) => {
    e.preventDefault();

    console.log(e.target.name);

    if (e.target.name == "signin") {
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({ type: Type.SET_USER, user: userInfo.user });
        })
        .catch((err) => {
          console.log(err);
          setError(err.message);
        });
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({ type: Type.SET_USER, user: userInfo.user });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <section className={classes.login}>
      <Link>
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
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
            />
          </div>
          <button
            type="submit"
            onClick={authHandler}
            name="signin"
            className={classes.login__SignInButton}
          >
            Sign In
          </button>
        </form>
        <p>
          By signing in, you agree to the Amazon Fake Clone conditions of use
          and sale. Please see our privacy notice, our cookies notice, and our
          interest-based ads notice.
        </p>
        <button
          type="submit"
          onClick={authHandler}
          name="signup"
          className={classes.login__registerbutton}
        >
          " Create Your Amazon Account"
        </button>
      </div>
    </section>
  );
}

export default Auth;
