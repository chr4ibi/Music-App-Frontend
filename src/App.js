import "./App.css";
import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router";
import HomePage from "./pages/HomePage/HomePage";
import SearchPage from "./pages/SearchPage/SearchPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import RedirectPage from "./pages/RedirectPage";
import PlayPage from "./pages/PlayPage/PlayPage";

const App = () => {
  const [expiryTime, setExpiryTime] = useState("0");

  useEffect(() => {
    let expiryTime;
    try {
      expiryTime = JSON.parse(localStorage.getItem("expiry_time"));
    } catch (error) {
      expiryTime = "0";
    }
    setExpiryTime(expiryTime);
  }, []);

  const isValidSession = () => {
    const currentTime = new Date().getTime();
    const isSessionValid = currentTime < expiryTime;

    return isSessionValid;
  };
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route
          path="/redirect"
          render={(props) => (
            <RedirectPage
              isValidSession={isValidSession}
              setExpiryTime={setExpiryTime}
              {...props}
            />
          )}
        />
        <Route
          path="/home"
          render={(props) => (
            <HomePage isValidSession={isValidSession} {...props} />
          )}
        />
        <Route
          path="/search"
          render={(props) => (
            <SearchPage isValidSession={isValidSession} {...props} />
          )}
        />
        <Route
          path="/play"
          render={(props) => (
            <PlayPage isValidSession={isValidSession}{...props} /> 
          )}
        />
        <Route component={NotFoundPage} />
        </Switch>
    </React.Fragment>
  );
};

export default App;
