import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Sistems extends Component {
  state = {
    Sistems: [
      {
        label: "Cardiovascular",
        imgPath: "celular.jpeg"
      },
      {
        label: "Celular",
        imgPath: "celular.jpeg"
      },
      {
        label: "Respiratorio",
        imgPath: "celular.jpeg"
      },
      {
        label: "Renal",
        imgPath: "celular.jpeg"
      },
      {
        label: "Digestivo",
        imgPath: "celular.jpeg"
      },
      {
        label: "Nervioso",
        imgPath: "celular.jpeg"
      },
      {
        label: "Endocrino",
        imgPath: "celular.jpeg"
      },
      {
        label: "Muscular",
        imgPath: "celular.jpeg"
      },
      {
        label: "Clinicos",
        imgPath: "celular.jpeg"
      }
    ]
  };

  list = this.state.Sistems.map((item) => {
    return (
      <div
        className="item web col-sm-6 col-md-4 col-lg-4 mb-4"
        key={item.label}
      >
        <NavLink to={"/sistema/" + item.label} className="item-wrap fancybox">
          <div className="work-info">
            <h3>{item.label}</h3>
          </div>
          <img
            className="img-fluid"
            src={"assets/img/" + item.imgPath}
            alt=""
          />
        </NavLink>
      </div>
    );
  });

  render() {
    return (
      <div className="container">
        <div className="row mb-5 align-items-center"></div>
        <div id="portfolio-grid" className="row no-gutter" data-aos-delay="200">
          {this.list}
        </div>
      </div>
    );
  }
}

export default Sistems;
