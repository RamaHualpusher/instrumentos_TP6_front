import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="jumbotron">
            <h1 className="display-4">Bienvenido a Musical Hendrix</h1>
            <p className="lead">
              Musical Hendrix es una tienda de instrumentos musicales con más de 15 años de experiencia. Tenemos el conocimiento y la capacidad para informarte acerca de las mejores elecciones para tu compra musical.
            </p>
            <hr className="my-4" />
            <Link to="/productos" className="btn btn-primary btn-lg mb-3 w-100">Explorar nuestros productos</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
