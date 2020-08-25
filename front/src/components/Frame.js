import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";

import NavBar from "./frame/NavBar";
import Sistems from "./frame/Sistems";
import ListSistem from "./frame/Sistems/ListSistem";

import "../style.css";
import Present from "./frame/Sistems/Present";

class Frame extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Route exact path="/" component={Sistems} />
        <Route path="/sistema/:id" component={ListSistem} />
        <Route path="/obj/:id" component={Present} />
      </BrowserRouter>
    );
  }
}

export default Frame;
