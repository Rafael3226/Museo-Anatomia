import React, { Component } from "react";
import { MTLLoader } from "react-3d-viewer";
import Axios from "axios";
import Obj from "./obj/Obj";

class Present extends Component {
  state = {
    _id: "",
    anatomia: "",
    anio: 0,
    autores: "",
    codigoEspecimen: "",
    descripcion: "",
    especie: "",
    fisiologiaCuantitativa: "",
    notas: "",
    objeto: "",
    patologia: "",
    sistema: "",
    tecnica: "",
    encontrado: false
  };
  componentDidMount() {
    const id = this.props.match.params.id;
    Axios.get("http://localhost:5000/especimenes/" + id)
      .then((res) => {
        this.setState({
          _id: res.data._id,
          anatomia: res.data.anatomia,
          anio: res.data.anio,
          autores: res.data.autores,
          codigoEspecimen: res.data.codigoEspecimen,
          descripcion: res.data.descripcion,
          especie: res.data.especie,
          fisiologiaCuantitativa: res.data.fisiologiaCuantitativa,
          notas: res.data.notas,
          objeto: res.data.objeto,
          patologia: res.data.patologia,
          sistema: res.data.sistema,
          tecnica: res.data.tecnica,
          encontrado: false
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }
  render() {
    const encontrado = this.state;
    const print = encontrado ? (
      <div className="container">
        <div className="site-section pb-0">
          <div className="container">
            <div className="row align-items-stretch">
              <Obj />
              <div
                className="col-md-3 ml-auto"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="sticky-content">
                  <h3 className="h3">Especie</h3>
                  <p className="mb-4">
                    <span className="text-muted">{this.state.especie}</span>
                  </p>
                  <h3 className="h3">Sistema</h3>
                  <p className="mb-4">
                    <span className="text-muted">{this.state.sistema}</span>
                  </p>
                  <h3 className="h3">Anatomia</h3>
                  <p className="mb-4">
                    <span className="text-muted">{this.state.anatomia}</span>
                  </p>

                  <h3 className="h3">Patologia</h3>
                  <p className="mb-4">
                    <span className="text-muted">{this.state.patologia}</span>
                  </p>
                  <p>
                    <button className="readmore" onClick={() => {}}>
                      +
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className="container">
        <h5>El objeto no fue encontrado</h5>
      </div>
    );
    return print;
  }
}

export default Present;
