import React, { createContext, useContext, useState } from "react";

const Context = createContext();

export const AuthContext = ({ children }) => {
  const [token, setToken] = useState(null);
  const userIsLoggedIn = !!token;

  const loginHandler = (token) => {
    setToken(token);
  };

  const logoutHandler = () => {
    setToken(null);
  };

  return (
    <Context.Provider
      value={{
        token,
        userIsLoggedIn,
        loginHandler,
        logoutHandler,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useAuthContext = () => useContext(Context);
