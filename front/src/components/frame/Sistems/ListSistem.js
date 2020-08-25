import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

class ListSistem extends Component {
  state = {
    sistema: "",
    registros: []
  };
  componentDidMount() {
    const sistema = this.props.match.params.id;
    this.setState({ sistema });
    axios
      .get("http://localhost:5000/especimenes/sistema/" + sistema)
      .then((res) => {
        this.setState({ registros: res.data }); //.slice(0, 10)
      })
      .catch((e) => {
        console.log(e);
      });
  }
  render() {
    const { sistema, registros } = this.state;
    const lista = registros.length ? (
      registros.map((item) => {
        return (
          <tr key={item._id}>
            <td>{item.codigoEspecimen}</td>
            <td>{item.especie}</td>
            <td>{item.patologia}</td>
            <td>{item.anatomia}</td>
            <td>{item.tecnica}</td>
            <td>
              <NavLink to={"/obj/" + item._id}>Ver</NavLink>
            </td>
          </tr>
        );
      })
    ) : (
      <tr key="0">
        <td>N/A</td>
        <td>N/A</td>
        <td>N/A</td>
        <td>N/A</td>
        <td>N/A</td>
        <td>N/A</td>
      </tr>
    );
    return (
      <div className="container">
        <h2>{sistema}</h2>
        <br />
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>Codigo</th>
                <th>Especie</th>
                <th>Patologia</th>
                <th>Anatomia</th>
                <th>Tecnica</th>
                <th></th>
              </tr>
            </thead>
            <tbody>{lista}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListSistem;
