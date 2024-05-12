import React, { useState } from 'react';
import axios from 'axios';
import Cabecalho from './cabecalho';
import Rodape from './rodape';
import '../sobre.css';
import apiUrl from '../services/ApiConfig';
import Swal from 'sweetalert2';

const Contato = () => {
  const [formData, setFormData] = useState({
    name: '',
    telephone: '',
    email: '',
    message: ''
  });

  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${apiUrl}/contact-us`, formData);
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Sucesso!",
        showConfirmButton: false,
        timer: 1500
      });
    } catch (error) {
      Swal.fire({
        title: 'Erro',
        text: error.response.data.message,
        icon: 'error',
        confirmButtonText: 'Fechar'
      });
      console.error('Erro ao enviar mensagem:', error);
    }
  };

  return (
    <>
      <Cabecalho />
    <div className='contato-area'>
      <div id="contact-us">
        <h2>Fale Conosco</h2>
      </div>
      <div id="content">
        <h2 id="msg">Envie uma mensagem</h2>
        <div id="form">
          <form className="form-container" onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="input-field"
                placeholder="Nome"
              />
            </div>
            <div className="input-group">
              <input
                type="tel"
                id="phone"
                name="telephone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="input-field"
                placeholder="Telefone"
              />
            </div>
            <div className="input-group">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="input-field"
                placeholder="Email"
              />
            </div>
            <div className="input-group">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="textarea-field"
                placeholder="Comentario"
              ></textarea>
            </div>
            <button type="submit" className="submit-button">Enviar</button>
          </form>
          {responseMessage && <p>{responseMessage}</p>}
        </div>
      </div>
      </div>
    
      <Rodape />
      </>
  );
};

export default Contato;
