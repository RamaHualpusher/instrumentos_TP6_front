import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { CheckCircleFill, XCircleFill } from 'react-bootstrap-icons';
import { Instrumento } from '../types/Instrumento';

interface Props {
  instrumento?: Instrumento | null;
  onSubmit: (instrumento: Instrumento) => void;
  onCancel: () => void;
}

const InstrumentoForm: React.FC<Props> = ({ instrumento, onSubmit, onCancel }) => {
  const [formInstrumento, setFormInstrumento] = useState<Instrumento>(instrumento || {
    id: "0",
    instrumento: '',
    marca: '',
    modelo: '',
    imagen: '',
    precio: '',
    costoEnvio: '',
    cantidadVendida: '',
    descripcion: '',
  });
  const [imageStatus, setImageStatus] = useState<'loading' | 'success' | 'fail'>('loading');
  const [imageUrl, setImageUrl] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormInstrumento({ ...formInstrumento, [e.target.name]: e.target.value });
    if (e.target.name === 'imagen') {
      setImageStatus('loading');
      setImageUrl(e.target.value);
    }
  };

  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageStatus('success');
    img.onerror = () => setImageStatus('fail');
    img.src = imageUrl;
  }, [imageUrl]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formInstrumento);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formInstrumento">
        <Form.Label>Instrumento</Form.Label>
        <Form.Control type="text" name="instrumento" value={formInstrumento.instrumento} onChange={handleChange} required />
      </Form.Group>
      <Form.Group controlId="formMarca">
        <Form.Label>Marca</Form.Label>
        <Form.Control type="text" name="marca" value={formInstrumento.marca} onChange={handleChange} required />
      </Form.Group>
      <Form.Group controlId="formModelo">
        <Form.Label>Modelo</Form.Label>
        <Form.Control type="text" name="modelo" value={formInstrumento.modelo} onChange={handleChange} required />
      </Form.Group>
      <Form.Group controlId="formImagen">
        <Form.Label>Imagen</Form.Label>
        <Form.Control
          type="text"
          name="imagen"
          value={formInstrumento.imagen}
          onChange={handleChange}
          style={{
            borderColor: imageStatus === 'success' ? 'green' : imageStatus === 'fail' ? 'red' : 'gray',
          }}
          required
        />
        {imageStatus === 'success' && <CheckCircleFill color="green" />}
        {imageStatus === 'fail' && (
          <div style={{ color: 'red' }}>
            <XCircleFill /> La imagen no pudo cargarse. Por favor, intenta con otra URL.
          </div>
        )}
      </Form.Group>
      <Form.Group controlId="formPrecio">
        <Form.Label>Precio</Form.Label>
        <Form.Control type="text" name="precio" value={formInstrumento.precio} onChange={handleChange} required />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
      <Button variant="secondary" onClick={onCancel}>
        Cancelar
      </Button>
    </Form>
  );
};

export default InstrumentoForm;
