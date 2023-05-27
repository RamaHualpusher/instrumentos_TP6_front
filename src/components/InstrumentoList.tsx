import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Modal } from 'react-bootstrap';
import GenericTable from './GenericTable';
import InstrumentoForm from './InstrumentoForm';
import { Instrumento } from '../types/Instrumento';

const InstrumentoList: React.FC = () => {
  const [instrumentos, setInstrumentos] = useState<Instrumento[]>([]);
  const [selectedInstrumento, setSelectedInstrumento] = useState<Instrumento | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const columns = [
    { title: 'Instrumento', field: 'instrumento' },
    { title: 'Marca', field: 'marca' },
    { title: 'Modelo', field: 'modelo' },
    { title: 'Imagen', field: 'imagen' },
    { title: 'Precio', field: 'precio' },
  ];
  const actions = {
    create: true,
    update: true,
    delete: true,
  };

  useEffect(() => {
    fetchInstrumentos();
  }, []);

  const fetchInstrumentos = async () => {
    const response = await axios.get('http://localhost:8080/api/instrumentos');
    setInstrumentos(response.data);
  };

  const handleAdd = () => {
    setSelectedInstrumento(null);
    setIsFormOpen(true);
  };

  const handleUpdate = (instrumento: Instrumento) => {
    setSelectedInstrumento(instrumento);
    setIsFormOpen(true);
  };

  const handleDelete = async (instrumento: Instrumento) => {
    await axios.delete(`http://localhost:8080/api/instrumentos/${instrumento.id}`);
    fetchInstrumentos();
  };

  const handleSubmit = async (instrumento: Instrumento) => {
    if (instrumento.id === "0") {
      await axios.post('http://localhost:8080/api/instrumentos', instrumento);
    } else {
      await axios.put(`http://localhost:8080/api/instrumentos/${instrumento.id}`, instrumento);
    }
    setIsFormOpen(false);
    fetchInstrumentos();
  };
  const handleCancel = () => {
    setIsFormOpen(false);
  };

  return (
    <div>
      <h1>LISTA DE INSTRUMENTOS</h1>
      
      <GenericTable
        data={instrumentos}
        columns={columns}
        actions={actions}
        onAdd={handleAdd}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
      />
      <Modal show={isFormOpen} onHide={handleCancel}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedInstrumento ? "Editar Instrumento" : "Agregar Instrumento"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InstrumentoForm
            instrumento={selectedInstrumento}
            onSubmit={handleSubmit}
            onCancel={handleCancel}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
};
export default InstrumentoList;

