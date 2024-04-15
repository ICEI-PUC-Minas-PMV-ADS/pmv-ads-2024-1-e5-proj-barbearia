import React, { useEffect, useState } from 'react';
import axios from 'axios';
import apiUrl from '../services/ApiConfig';

const Agendamento2 = () => {
    const [funcionarios, setFuncionarios] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`${apiUrl}/schedule/employees`);
          setFuncionarios(response.data);
          console.log(response);
        } catch (error) {
          console.error('Erro ao buscar os dados:', error);
        }
      };
  
      fetchData();
    }, []);

  return (
    <div className='body-agendamento'>
      <div>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"/>
      </div>
      <div className='cab-agendamento'>
        <div className='cabecalho-agendamento'>
          <a href="/agendamento">
          <i className="bi bi-arrow-left-short" style={{ fontSize: '2rem' }}></i>
          </a>
          <h2>Passo 2 de 4</h2>
          <h1>Selecionar Profissional</h1>

        </div>
        <div className='cabecalho-logo'>
          <img className='logo-agendamento' src="/imagens/logo.png" alt="logomarca vintage barbearia" />

        </div>
      </div>
    <div className='conteudo-agendamento-div'>
      <div className='conteudo-agendamento'>
          {funcionarios.map((funcionario, index) => (
            <div className='div-profissional'>
              <div className='conteudo-profissional'>
                <i class="bi bi-person"></i>
                <button id="selecionar-barbeiro">{funcionario.name}</button>
              </div>
            </div>
          ))}
          
          </div>
      </div>
      </div>
    
  );
};

export default Agendamento2;
