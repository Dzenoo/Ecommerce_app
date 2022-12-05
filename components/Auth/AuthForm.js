import { useRef, useState } from "react";
import { useAuthContext } from "../../context/AuthContext";

import Redirect from "next/router";

import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const { loginHandler } = useAuthContext();

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [isLoading, setIsLoading] = useState(false);

  const SubmitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    setIsLoading(true);

    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAcw-aGbVkEruEu795b270IXt0S1g-jE2g";

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Email or passwrod invalid";

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        loginHandler(data.idToken);
        Redirect.push("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <section className={classes.form}>
      <h1>Login as Admin</h1>
      <form onSubmit={SubmitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            ref={emailInputRef}
            placeholder="userEdit@gmail.com"
            required
          ></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="email">Password</label>
          <input
            type="password"
            id="password"
            minLength="7"
            placeholder="userEdit"
            ref={passwordInputRef}
          ></input>
        </div>
        <div className={classes.actions}>
          {!isLoading && <button>Login</button>}
          {isLoading && <p>...</p>}
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
