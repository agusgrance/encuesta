import React, { useState, useContext } from "react";
import './Login.css'
import { Button, Form } from 'react-bootstrap';
import AnswerContext from '../../Context/AnswerContext'
function Login() {
    const { setLogin, setEncuestado, encuestado } = useContext(AnswerContext);
    const handleNombre = (e) => {
        setEncuestado({nombre: e.target.value});
      };
      const handleEmpresa = (e) => {
        setEncuestado({empresa: e.target.value});
      };
      const handleEmail= (e) => {
        setEncuestado({email: e.target.value});
      };
      const handleTelefono= (e) => {
        setEncuestado({telefono: e.target.value});
      };

  return (
    <div className='login'>
      <Form onSubmit={()=>setLogin(false)}> 
      <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Nombre y Apellido</Form.Label>
    <Form.Control type="text" placeholder="Ingrese su Nombre y Apellido"  required onChange={handleNombre}/>

      <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Nombre de Empresa</Form.Label>
    <Form.Control type="text" placeholder="Ingrese el Nombre de la Empresa"required  onChange={handleEmpresa}/>
  </Form.Group>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="Ingrese su email" required   onChange={handleEmail}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Telefono</Form.Label>
    <Form.Control type="text" placeholder="Ingrese un telefono de contacto" required   onChange={handleTelefono}/>
  </Form.Group>

  <Button variant="primary" type="submit" >
    Ingresar
  </Button>
</Form>
    </div>
  )
}

export default Login