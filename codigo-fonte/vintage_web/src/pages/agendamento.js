import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import apiUrl from '../services/ApiConfig';

const Agendamento = () => {
  const [servicos, setServicos] = useState([]);
  const [botaoClicado, setBotaoClicado] = useState(null);
  const [servicoSelecionado, setServicoSelecionado] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/schedule/service`);
        setServicos(response.data);
      } catch (error) {
        console.error('Erro ao buscar os dados:', error);
      }
    };

    fetchData();
  }, []);

  const handleButtonClick = (servico, index) => {
    setBotaoClicado(index);
    setServicoSelecionado(servico);
  };

  return (
    <div className='body-agendamento'>
      <div>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"/>
      </div>

      <div className='cab-agendamento'>
        <div className='cabecalho-agendamento'>
        <a href="/">
            <i className="bi bi-arrow-left-short" style={{ fontSize: '2rem' }}></i>
          </a>
          <h2>Passo 1 de 4</h2>
          <h1>Selecionar Serviço</h1>
        </div>
        <div className='cabecalho-logo'>
        <a href="/"><img className='logo-agendamento' src="/imagens/logo.png" alt="logomarca vintage barbearia" /></a>
        </div>
      </div>
      <div className='conteudo-agendamento-div'>
        <div className='conteudo-agendamento'>
          <div className='filtros-agendamento'>
            <button className='opc-filtro'>Barba</button>
            <button className='opc-filtro-selecionado'>Cabelo</button>
            <button className='opc-filtro'>Química</button>
            <button className='opc-filtro'>Estética</button>
          </div>

          <div className='servicos-agendamento'> 
            <ul>
            {servicos.length === 0 ? (
              <div id="loading">Carregando...</div>
            ) : (
            servicos.map((servico, index) => (
              <li key={index} className='servico-div'>
                <button onClick={() => handleButtonClick(servico, index)} className={`servico-button ${botaoClicado === index ? 'changeColor' : ''}`}>
                  <p className='servico-titulo-agn'>{servico.name}</p>
                  <p>45min - R${servico.price}</p>
                </button>
              </li>
            ))
          )}
            </ul>
          </div>
          {servicoSelecionado && (
            <div className="botao-prosseguir">
              <Link to={`/agendamento2/${servicoSelecionado.name}`}>
                <button id="next-page">Proximo</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Agendamento;
