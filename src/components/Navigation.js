import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="navigation">
      <h1 className="navigation__title">MANGO MOVIE</h1>
      <div className="navigations">
        <Link to="/" className="navigation__home">
          Home
        </Link>
        <Link to="/about" className="navigation__about">
          About
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
