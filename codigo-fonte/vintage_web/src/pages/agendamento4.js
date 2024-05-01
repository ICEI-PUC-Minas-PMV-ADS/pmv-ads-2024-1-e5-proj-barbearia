import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import apiUrl from '../services/ApiConfig';
import Swal from 'sweetalert2';

const Agendamento4 = () => {
  const { serviceName } = useParams();
  const { employeeId } = useParams();
  const { date } = useParams();
  const { hour } = useParams();
  const [formValues, setFormValues] = useState({
    nome: '',
    email: '',
    telefone: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      'serviceName': serviceName,
      'employeeId': employeeId,
      'date' : date,
      'hour': hour,
      'name': formValues.nome,
      'email': formValues.email,
      'telephone': formValues.telefone,
    }
    
    try {
      const response = await axios.post(`${apiUrl}/schedule/finalize-scheduling`, data);
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
    }
  };

  console.log(date);
  console.log(hour);

  return (
    <div className='body-agendamento'>
      <div>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css" />
      </div>
      <div className='cab-agendamento'>
        <div className='cabecalho-agendamento'>
          <a href={`/agendamento3/${serviceName}/${employeeId}`}>
            <i className="bi bi-arrow-left-short" style={{ fontSize: '2rem' }}></i>
          </a>
          <h2>Passo 4 de 4</h2>
          <h1>Concluir Agendamento</h1>

        </div>
        <div className='cabecalho-logo'>
          <a href="/"><img className='logo-agendamento' src="/imagens/logo.png" alt="logomarca vintage barbearia" /></a>

        </div>
      </div>
      <div className='conteudo-agendamento-div'>
        <div className='conteudo-agendamento'>
          <div className='concluir-agn-div'>
            <p className='input-data'>Informe seus dados</p>
          </div>
            <div className='input-concluir-area'>
              <form id="informar-dados" onSubmit={handleSubmit}>
                <input type='Name' placeholder='Nome' name='nome' value={formValues.nome} onChange={handleInputChange}></input>
                <input type='phone' placeholder='Telefone' name='telefone' value={formValues.telefone} onChange={handleInputChange}></input>
                <input type='email' placeholder='E-mail' name='email' value={formValues.email} onChange={handleInputChange}></input>
                <div>
                  <button className='btn-confirmar' type="submit">Confirmar</button>
                  <Link to="/" className='btn-cancelar'>Cancelar</Link>
                </div>
              </form>
            </div>

        </div>
      </div>
    </div>

  );
};

export default Agendamento4;
