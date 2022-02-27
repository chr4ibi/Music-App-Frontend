import React from "react";
import "./LoginPage.css";
import { Link } from "react-router-dom";
import { Button } from'react-bootstrap'

const LoginPage = () => {
  const {
    REACT_APP_CLIENT_ID,
    REACT_APP_AUTHORIZE_URL,
    REACT_APP_REDIRECT_URL,
  } = process.env;

  const handleLogin = () => {
    window.location = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URL}&response_type=token&show_dialog=true`;
  };

  return (
    <div className="home-page">
      <h1 className='main-heading'>Spotify Music App</h1>
      <Link to="/home">
      <Button variant="success" size="lg" onClick={() => handleLogin()}>
      Login To Spotify
    </Button>
      </Link>
    </div>
  );
};

export default LoginPage;
