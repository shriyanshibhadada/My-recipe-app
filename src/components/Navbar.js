import React from "react";
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-light custom-navbar">
        <div className="container">
          <a className="navbar-brand" href="/">
            MyRecipeApp.
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
