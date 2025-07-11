import React, { useState, useContext } from "react";
import classes from "./Auth.module.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../Utility/fireBase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { DataContext } from "../../Components/DataProvider/DataProvider";
import { ClipLoader } from "react-spinners";
const Type = {
  SET_USER: "SET_USER",
};

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [{ user }, dispatch] = useContext(DataContext);
  const [loading, setLoading] = useState({ signIn: false, signUp: false });
  const navigate = useNavigate();

  const authHandler = async (e) => {
    e.preventDefault();

    setError("");

    if (e.target.name === "signin") {
      setLoading({ ...loading, signIn: true });
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({ type: Type.SET_USER, user: userInfo.user });
          setLoading({ ...loading, signIn: false });
          navigate("/");
        })
        .catch((err) => {
          setError(err.message);
          setLoading({ ...loading, signIn: false });
        });
    } else {
      setLoading({ ...loading, signUp: true });
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({ type: Type.SET_USER, user: userInfo.user });
          setLoading({ ...loading, signUp: false });
          navigate("/");
        })
        .catch((err) => {
          setError(err.message);
          setLoading({ ...loading, signUp: false });
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
            {loading.signIn ? (
              <ClipLoader color="gray" size={15}></ClipLoader>
            ) : (
              " Sign In"
            )}
          </button>

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
            {loading.signUp ? (
              <ClipLoader color="gray" size={15}></ClipLoader>
            ) : (
              " Create Your Amazon Account"
            )}
          </button>
          {error && (
            <small style={{ padding: "5px", color: "red" }}>{error}</small>
          )}
        </form>
      </div>
    </section>
  );
}

export default Auth;
