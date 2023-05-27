import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Instrumento } from '../types/Instrumento';

const DetalleInstrumento = () => {
  const { id } = useParams<{ id: string }>();
  const [instrumento, setInstrumento] = useState<Instrumento | undefined>();

  useEffect(() => {
    fetch(`http://localhost:8080/api/instrumentos/${id}`)
      .then(response => response.json())
      .then(data => setInstrumento(data))
      .catch(error => console.error(error));
  }, []);
  

  if (!instrumento) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="container-fluid mt-3" style={{ maxWidth: "80%" }}>
      <div className="row justify-content-center bg-info p-2 text-dark bg-opacity-50">
        <div className="col-md-7">
          <div className="row">
            
            <div className="col-12 col-md-8">
              <img src={instrumento.imagen.startsWith('http') ? instrumento.imagen : `/img/${instrumento.imagen}`} alt={instrumento.instrumento} className="img-fluid mb-4" />

              <p className='text-muted' >{instrumento.descripcion}</p>
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <div className="row">
            <div className="col-12 mb-3">
              
              <small className="text-muted">
                  {instrumento.cantidadVendida !=="0"
                    ? `${instrumento.cantidadVendida} vendidos`
                    : "Puedes ser el primero en probarlo"}</small>
              <p className='fs-2'>{instrumento.instrumento}</p>
              <p className='fs-4 mt-5'>Precio: ${instrumento.precio}</p>
              <p className='mt-5'>Marca: {instrumento.marca}</p>
              <p>Modelo: {instrumento.modelo}</p>
              <p
                  className={`card-text mt-5 ${
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
              <button className="btn btn-outline-primary btn-lg float-end">
                Agregar al carrito
              </button>
            </div>
            
          </div>
        </div>
      </div>
      <div className="col-12">
              <Link to="/productos" className="btn btn-primary btn-lg mt-3 w-100">
                Volver a la lista
              </Link>
            </div>
    </div>
  );
};

export default DetalleInstrumento;
