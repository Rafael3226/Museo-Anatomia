import React, { Component } from "react";

import Logo from "./logo-uniandes.png";

class NavBar extends Component {
  render() {
    return (
      <div className="container">
        <a className="navbar-brand" href="/">
          <br />
          <img src={Logo} alt="logo" width="40%" height="40%" />
          <br />
        </a>
        <hr />
        <h1>Museo de Anatomia</h1>
        <hr />
      </div>
    );
  }
}

export default NavBar;
