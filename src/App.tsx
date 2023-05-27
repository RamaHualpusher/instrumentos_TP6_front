import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import DondeEstamos from "./components/DondeEstamos";
import Productos from "./components/Productos";
import DetalleInstrumento from './components/DetalleInstrumento';
import Navbar from './components/Navbar';
import InstrumentoList from './components/InstrumentoList';

const App: React.FC = () => {
  return (
    <Router>
      <div className="container-fluid p-0">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donde-estamos" element={<DondeEstamos />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/productos/:id" element={<DetalleInstrumento />} />
          <Route path="/admin/productos" element={<InstrumentoList />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
