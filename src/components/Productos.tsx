import React, { useEffect, useState } from "react";
import ListaItem from "./ListaItem";
import { Instrumento } from "../types/Instrumento";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

interface Props {
  instrumento: Instrumento;
}

const Productos = () => {
  const [instrumentos, setInstrumentos] = useState<Instrumento[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/instrumentos")
      .then((response) => response.json())
      .then((instrumentos) => {
        setInstrumentos(instrumentos);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="container-fluid">
      <div className="row justify-content-center" >
        <div className="col-12 col-md-10 text-center mt-3">
          <h1 className="h1 text-primary">Productos</h1>
        </div>

        
        <div className="col-12 col-md-10 text-center mt-3">
        <Link to="/admin/productos" className="navbar-brand"><Button variant="primary" className="w-50 p-3 m-3">Administrar</Button></Link>
        </div>
        

        <div className="col-12 col-md-10">
          <div className="row">
            {instrumentos.length > 0 ? (
              instrumentos.map((instrumento) => (
                <div className="col-12 mb-4" key={instrumento.id}>
                  <ListaItem instrumento={instrumento} />
                </div>
              ))
            ) : (
              <div className="col-12 text-center">
                <p>No hay instrumentos disponibles</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productos;
