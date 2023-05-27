import React from "react";
import { Link } from "react-router-dom";
import { Instrumento } from "../types/Instrumento";
import DetalleInstrumento from "./DetalleInstrumento";

interface Props {
  instrumento: Instrumento;
}

const ListaItem = ({ instrumento }: Props) => {
  return (
    <div className="card mt-3 bg-info p-2 text-dark bg-opacity-50">
      <div className="row no-gutters">
        <div className="col-md-3">
          <Link to={`/productos/${instrumento.id}`}>
          <img
            src={instrumento.imagen.startsWith('http') ? instrumento.imagen : `./img/${instrumento.imagen}`}
            className="card-img"
            alt={instrumento.instrumento}
            style={{ maxWidth: "100%" }}
          />
          </Link>
        </div>
        <div className="col-md-9">
          <div className="row h-100">
            <div className="col-md-12 d-flex align-items-start">
              <div className="card-body">
                <h5 className="card-title text-primary fs-4">{instrumento.instrumento}</h5>
              </div>
            </div>
            <div className="col-md-12 d-flex align-items-center">
              <div className="card-body">
                <p className="card-text"><strong className="fs-4">$ {instrumento.precio}</strong></p>
                <p
                  className={`card-text${
                    instrumento.costoEnvio === "G"
                      ? " text-success"
                      : " text-danger"
                  }`}
                >
                  <i className="bi bi-truck"> </i>
                  {instrumento.costoEnvio === "G"
                    ? "Envió gratis a todo el país"
                    : `Costo de envío al interior de Argentina: $${instrumento.costoEnvio}`}
                </p>
                <p className="text-muted">
                  {instrumento.cantidadVendida !=="0"
                    ? `${instrumento.cantidadVendida} vendidos`
                    : "Puedes ser el primero en probarlo"}
                </p>

                <Link
                  to={`/productos/${instrumento.id}`}
                  className="btn btn-success float-end"
                >
                  <span className="text-light">
                  Ver Detalles
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListaItem;
