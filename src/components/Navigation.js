import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="navigation">
      <div className="navigation__dots">●</div>
      <h1 className="navigation__title">MANGO MOVIE</h1>
      <div className="navigations">
        <Link to="/" className="navigation__home">
          Home
        </Link>
        <Link to="/about" className="navigation__about">
          About
        </Link>
      </div>
      <div className="navigation__dots">●</div>
    </div>
  );
}

export default Navigation;
