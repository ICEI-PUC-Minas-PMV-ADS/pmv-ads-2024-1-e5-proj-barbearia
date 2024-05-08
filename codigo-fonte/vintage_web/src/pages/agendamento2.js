import React, { useEffect, useState } from 'react';
import axios from 'axios';
import apiUrl from '../services/ApiConfig';
import { Link, useParams } from 'react-router-dom';

const Agendamento2 = () => {
  const { serviceName } = useParams();
  const [funcionarios, setFuncionarios] = useState([]);
  const [botaoClicado, setBotaoClicado] = useState(null);
  const [funcionarioSelecionado, setFuncionarioSelecionado] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(serviceName);
        const response = await axios.get(`${apiUrl}/schedule/employees`);
        setFuncionarios(response.data);
      } catch (error) {
        console.error('Erro ao buscar os dados:', error);
      }
    };

    fetchData();
  }, []);

  const handleButtonClick = (funcionario, index) => {
    console.log("Botão clicado:", index);
    setBotaoClicado(index);
    setFuncionarioSelecionado(funcionario);
  };
  

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
          <a href="/"><img className='logo-agendamento' src="/imagens/logo.png" alt="logomarca vintage barbearia" /></a>
        </div>
      </div>
      <div className='conteudo-agendamento-div'>
        <div className='conteudo-agendamento'>
          {funcionarios.length === 0 ? (
            <div id="loading">Carregando...</div>
          ) : (
            funcionarios.map((funcionario, index) => (
              <div className='div-profissional' key={index}>
                <div className='conteudo-profissional'>
                  
                  <button className='selecionar-barbeiro' onClick={() => handleButtonClick(funcionario, index)} > <i className="bi bi-person icone-profissional"></i>{funcionario.name}</button>
                </div>
              </div>
            ))
          )}
          {funcionarioSelecionado && (
            <div className="botao-prosseguir">
              <Link to={`/agendamento3/${serviceName}/${funcionarioSelecionado.id}`}>
                <button id="next-page">Proximo</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};   

export default Agendamento2;
