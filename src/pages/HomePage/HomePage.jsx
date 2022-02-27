import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  
  return (
    <div className="landing-page">
      <Link to="/search">
        <button className='search-btn'>Search music</button>
      </Link>
      <Link to="/play">
        <button className='play-btn'>Listen to a song</button>
      </Link>
    </div>
  );
};

export default HomePage;
